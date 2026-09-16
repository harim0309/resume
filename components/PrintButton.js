"use client";

export default function PrintButton() {
  return (
    <button className="print-button" type="button" onClick={() => window.print()}>
      <span aria-hidden="true">↓</span>
      PDF로 저장
    </button>
  );
}
