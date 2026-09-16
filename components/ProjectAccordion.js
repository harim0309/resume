"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectAccordion({ summary, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const content = contentRef.current;
    const updateHeight = () => setContentHeight(content.scrollHeight);
    const observer = new ResizeObserver(updateHeight);

    updateHeight();
    observer.observe(content);

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "프로젝트 상세 접기" : "프로젝트 상세 펼치기"}
        className="absolute inset-0 z-10 cursor-pointer rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8dffb7] print:hidden"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
      />
      <div className="flex w-full items-start justify-between gap-5 max-[820px]:flex-col print:block">
        <div className="flex min-w-0 flex-1 items-start justify-between gap-5 max-[820px]:grid print:block">
          {summary}
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#8dffb7]/30 bg-[#8dffb7]/5 px-3 py-2 text-[11px] font-bold text-[#8dffb7] transition-colors print:hidden">
          {isOpen ? "접기" : "상세 보기"}
          <svg
            aria-hidden="true"
            className={`size-3.5 transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-[height,opacity,transform] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none print:h-auto! print:translate-y-0! print:opacity-100! ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
        style={{ height: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
