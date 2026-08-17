import { useLayoutEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Lenis from 'lenis';
import { cn } from '../lib/utils';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={cn(
      'scroll-stack-card relative w-full h-auto min-h-80 my-8 p-0 rounded-[30px] md:rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform',
      itemClassName
    )}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}>
    {children}
  </div>
);

ScrollStackItem.propTypes = {
  children: PropTypes.node.isRequired,
  itemClassName: PropTypes.string
};

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 300,
  itemStackDistance = 0,
  stackPosition = '10%',
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback((element, index = -1) => {
    if (useWindowScroll) {
      const rect = element.getBoundingClientRect();
      // rect includes the transforms we applied; subtract the recorded
      // translateY so we always read the card's natural layout position.
      const translate = lastTransformsRef.current.get(index)?.translateY ?? 0;
      return rect.top + window.scrollY - translate;
    } else {
      return element.offsetTop;
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    // On mobile and tablet screens (< 1024px), disable stack pinning and reset transforms for standard scrolling
    if (window.innerWidth < 1024) {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.transform = 'none';
        card.style.opacity = '1';
        card.style.filter = 'none';
      });
      return;
    }

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement, -1) : 0;

    const cards = cardsRef.current;

    // Natural (untransformed) trigger/pin positions per card.
    const positions = cards.map((card, i) => {
      if (!card) return null;
      const cardTop = getElementOffset(card, i);
      const cardHeight = card.offsetHeight || 0; // Measure card height

      // On mobile/small screens, add space based on card height so content finishes displaying
      const isSmallScreen = window.innerWidth < 768;
      const extraPadding = isSmallScreen ? cardHeight * 0.4 : 0;

      return {
        i,
        cardTop,
        enterStart: cardTop - containerHeight,
        pinStart: cardTop - stackPositionPx - itemStackDistance * i,
        // Extend pinEnd on small screens so the lower detail remains visible
        pinEnd: endElementTop - containerHeight / 2 + extraPadding
      };
    });

    // The active card is the last one that has entered the viewport (1% visible).
    let activeIndex = 0;
    positions.forEach(p => {
      if (p && scrollTop >= p.enterStart) activeIndex = p.i;
    });

    cards.forEach((card, i) => {
      if (!card) return;
      const p = positions[i];

      let translateY = 0;
      let scale = 1;
      let rotation = 0;
      let opacity = 1;
      let blur = 0;

      if (i === activeIndex) {
        // Current card: fully shown, pinned at the stack position.
        if (scrollTop >= p.pinStart && scrollTop <= p.pinEnd) {
          translateY = scrollTop - p.cardTop + stackPositionPx + itemStackDistance * i;
        } else if (scrollTop > p.pinEnd) {
          translateY = p.pinEnd - p.cardTop + stackPositionPx + itemStackDistance * i;
        } else {
          translateY = 0;
        }
        scale = 1;
        opacity = 1;
        if (rotationAmount) {
          rotation = i * rotationAmount * calculateProgress(scrollTop, p.enterStart, p.pinStart);
        }
      } else if (i < activeIndex) {
        // Previous cards: fade out while the next card scrolls into place.
        const next = positions[i + 1];
        const fadeProgress = next
          ? calculateProgress(scrollTop, next.enterStart, next.pinStart)
          : 1;
        opacity = Math.max(0, Math.min(1, 1 - fadeProgress));
        translateY = scrollTop - p.cardTop + stackPositionPx + itemStackDistance * i;
        if (blurAmount) {
          blur = Math.max(0, fadeProgress * blurAmount);
        }
      } else {
        // Future cards: natural position below the viewport.
        translateY = 0;
        opacity = 1;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
        opacity: Math.round(opacity * 1000) / 1000
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1 ||
        Math.abs(lastTransform.opacity - newTransform.opacity) > 0.001;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        card.style.opacity = String(newTransform.opacity);
        card.style.zIndex = String(i);
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cards.length - 1) {
        const isInView = scrollTop >= p.pinStart && scrollTop <= p.pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemStackDistance,
    stackPosition,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(useWindowScroll
      ? document.querySelectorAll('.scroll-stack-card')
      : scroller.querySelectorAll('.scroll-stack-card'));

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    const applyCardSpacing = () => {
      const isSmallScreen = window.innerWidth < 1024;
      const effectiveDistance = isSmallScreen ? 48 : itemDistance;
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = `${effectiveDistance}px`;
        }
      });
    };

    cards.forEach((card, i) => {
      card.style.willChange = 'transform, filter, opacity';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
      card.style.zIndex = String(i);
      card.dataset.index = String(i);
    });

    applyCardSpacing();
    window.addEventListener('resize', applyCardSpacing);

    setupLenis();

    updateCardTransforms();

    return () => {
      window.removeEventListener('resize', applyCardSpacing);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemStackDistance,
    stackPosition,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  // Container styles based on scroll mode
  const containerStyles = useWindowScroll
    ? {
      // Global scroll mode - no overflow constraints
      overscrollBehavior: 'contain',
      WebkitOverflowScrolling: 'touch',
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)'
    }
    : {
      // Container scroll mode - original behavior
      overscrollBehavior: 'contain',
      WebkitOverflowScrolling: 'touch',
      scrollBehavior: 'smooth',
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      willChange: 'scroll-position'
    };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-0 pb-0 lg:pb-[25rem] min-h-screen">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

ScrollStack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  itemDistance: PropTypes.number,
  itemStackDistance: PropTypes.number,
  stackPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotationAmount: PropTypes.number,
  blurAmount: PropTypes.number,
  useWindowScroll: PropTypes.bool,
  onStackComplete: PropTypes.func
};

export default ScrollStack;
