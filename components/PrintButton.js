"use client";

export default function PrintButton() {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-[9px] rounded-full border border-[#8dffb7]/40 bg-[#8dffb7] px-[15px] py-2.5 text-[13px] font-extrabold text-[#0d1611]"
      type="button"
      onClick={() => window.print()}
    >
      <span aria-hidden="true">↓</span>
      PDF로 저장
    </button>
  );
}
