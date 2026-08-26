import { useEffect, useState } from "react";
import { Github, GitCommit, GitPullRequest, Star, Users, ExternalLink } from "lucide-react";
import { fetchGitHubData } from "@/lib/github";

const GITHUB_USERNAME = "eriXtrip";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

const LEVELS = [
  "bg-neutral-200 dark:bg-neutral-800",
  "bg-[#ffc01d]/20",
  "bg-[#ffc01d]/45",
  "bg-[#ffc01d]/70",
  "bg-[#ffc01d]",
];

const getLevel = (count) => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 10) return 3;
  return 4;
};

const formatDate = (dateStr) =>
  new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const SkeletonPulse = ({ className }) => (
  <div className={`animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded ${className}`} />
);

export const GitHubSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetchGitHubData(GITHUB_USERNAME)
      .then((d) => {
        setData(d);
        const years = [
          ...new Set(
            d.weeks
              .map((w) => new Date(w[0].date + "T00:00:00").getFullYear())
          ),
        ];
        setSelectedYear(years[years.length - 1]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const allWeeks = data?.weeks ?? [];
  const totalAll = data?.totalContributions ?? 0;

  const availableYears = [
    ...new Set(
      allWeeks.map((w) => new Date(w[0].date + "T00:00:00").getFullYear())
    ),
  ].sort((a, b) => a - b);

  const filteredWeeks = selectedYear
    ? allWeeks.filter(
        (w) => new Date(w[0].date + "T00:00:00").getFullYear() === selectedYear
      )
    : allWeeks;

  const filteredTotal = filteredWeeks.reduce(
    (sum, w) => sum + w.reduce((s, d) => s + d.count, 0),
    0
  );

  const monthLabels = [];
  let lastMonth = -1;
  filteredWeeks.forEach((week, i) => {
    const first = week[0];
    if (first) {
      const month = new Date(first.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        monthLabels.push({
          label: new Date(first.date + "T00:00:00").toLocaleString("en-US", {
            month: "short",
          }),
          index: i,
        });
        lastMonth = month;
      }
    }
  });

  const statCards = data
    ? [
        { icon: GitCommit, label: "Repos", value: data.stats.repositories },
        {
          icon: GitPullRequest,
          label: "Pull Requests",
          value: data.stats.pullRequests,
        },
        { icon: Star, label: "Stars Given", value: data.stats.stars },
        { icon: Users, label: "Followers", value: data.stats.followers },
      ]
    : [];

  const dateRangeText = (() => {
    if (!filteredWeeks.length) return "";
    const first = filteredWeeks[0][0]?.date;
    const last = filteredWeeks[filteredWeeks.length - 1]?.at(-1)?.date;
    if (!first || !last) return "";
    const f = new Date(first + "T00:00:00");
    const l = new Date(last + "T00:00:00");
    return `${f.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })} \u2013 ${l.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })}`;
  })();

  return (
    <section id="github" className="py-24 px-3 md:px-10 relative">
      <div className="container max-w-7xl mx-auto px-2 mid:px-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            GitHub{" "}
            <span className="font-black text-[#ffc01d]">Activity</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            Open-source contributions, commits, and coding activity from 2023
            to present.
          </p>
        </div>

        {/* Contribution Graph Card */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-3xl p-6 md:p-10 space-y-6">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0">
                <Github className="h-5 w-5" />
              </span>
              <div>
                {loading ? (
                  <>
                    <SkeletonPulse className="h-5 w-48 mb-1" />
                    <SkeletonPulse className="h-3 w-32" />
                  </>
                ) : error ? (
                  <>
                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 dark:text-white">
                      Unable to load data
                    </h3>
                    <p className="text-xs text-red-500">{error}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 dark:text-white">
                      {filteredTotal.toLocaleString()} contributions
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                      {dateRangeText}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Year Tabs + Profile Link */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {!loading && availableYears.length > 1 && (
                <div className="flex items-center gap-0.5 sm:gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                        selectedYear === year
                          ? "bg-[#ffc01d] text-neutral-900 shadow-sm"
                          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-[11px] sm:text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:border-[#ffc01d]/50 hover:text-[#ffc01d] transition-all duration-300 shrink-0"
              >
                @{GITHUB_USERNAME}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Heatmap Grid */}
          <div className="pb-2 overflow-hidden">
            {loading ? (
              <div className="overflow-x-auto -mx-2 px-2">
                <div className="flex gap-0 mt-5 min-w-max">
                  <div className="flex flex-col gap-[3px] mr-2 shrink-0">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <SkeletonPulse key={i} className="w-[11px] h-[11px] rounded-[2px]" />
                    ))}
                  </div>
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 40 }).map((_, w) => (
                      <div key={w} className="flex flex-col gap-[3px]">
                        {Array.from({ length: 7 }).map((_, d) => (
                          <SkeletonPulse key={d} className="w-[11px] h-[11px] rounded-[2px]" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto -mx-2 px-2">
                <div className="min-w-max">
                  {/* Month labels */}
                  <div className="relative h-4 mb-2 ml-8">
                    {monthLabels.map((m, i) => (
                      <span
                        key={i}
                        className="absolute text-[10px] font-semibold text-neutral-400 dark:text-neutral-500"
                        style={{
                          left: `${(m.index / Math.max(filteredWeeks.length, 1)) * 100}%`,
                        }}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-0 mt-5">
                    {/* Day labels */}
                    <div className="flex flex-col gap-[3px] mr-2 text-[9px] font-semibold text-neutral-400 dark:text-neutral-500 shrink-0">
                      {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                        <span key={i} className="h-[11px] leading-[11px]">{d}</span>
                      ))}
                    </div>

                    {/* Contribution squares */}
                    <div className="flex gap-[3px]">
                      {filteredWeeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-[3px]">
                          {week.map((day, dIdx) => {
                            const level = getLevel(day.count);
                            const key = `${wIdx}-${dIdx}`;
                            return (
                              <div
                                key={key}
                                className="relative group"
                                onMouseEnter={() => setHovered(key)}
                                onMouseLeave={() => setHovered(null)}
                              >
                                <div
                                  className={`w-[11px] h-[11px] rounded-[2px] transition-all duration-150 ${
                                    level === 0
                                      ? "bg-neutral-200/80 dark:bg-neutral-800/80 hover:ring-1 hover:ring-neutral-400/40 dark:hover:ring-neutral-600/40"
                                      : LEVELS[level]
                                  } ${
                                    hovered === key
                                      ? "ring-2 ring-neutral-400 dark:ring-neutral-500 scale-150 z-10"
                                      : ""
                                  }`}
                                />
                                {hovered === key && (
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[10px] font-bold rounded-lg whitespace-nowrap shadow-lg z-20 pointer-events-none hidden sm:block">
                                    <span className="block">
                                      {day.count === 0
                                        ? "No contributions"
                                        : `${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                                    </span>
                                    <span className="block text-neutral-400 dark:text-neutral-500 font-normal">
                                      {formatDate(day.date)}
                                    </span>
                                  </div>
                                )}
                                {hovered === key && (
                                  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 mb-0 px-2.5 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[10px] font-bold rounded-lg whitespace-nowrap shadow-lg z-50 pointer-events-none sm:hidden">
                                    <span className="block">
                                      {day.count === 0
                                        ? "No contributions"
                                        : `${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                                    </span>
                                    <span className="block text-neutral-400 dark:text-neutral-500 font-normal">
                                      {formatDate(day.date)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-end gap-1.5 mt-4 text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">
                    <span>Less</span>
                    {LEVELS.map((cls, i) => (
                      <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${cls}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}

            {/* Stats Strip */}
            <div className="border-t border-neutral-200/50 dark:border-neutral-800/55 pt-5 mt-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {loading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <SkeletonPulse className="h-8 w-8 rounded-lg shrink-0" />
                        <div className="space-y-1">
                          <SkeletonPulse className="h-4 w-12" />
                          <SkeletonPulse className="h-2.5 w-16" />
                        </div>
                      </div>
                    ))
                  : statCards.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3 group">
                        <span className="p-1.5 sm:p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:text-[#ffc01d] group-hover:bg-[#ffc01d]/10 transition-all duration-300 shrink-0">
                          <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </span>
                        <div>
                          <p className="text-base sm:text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] transition-colors leading-none">
                            {stat.value.toLocaleString()}
                          </p>
                          <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
