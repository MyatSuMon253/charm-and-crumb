import { cn } from "@/lib/utils";

import type { BaseOption } from "./customizer-data";

export function BaseSilhouette({
  base,
  className,
}: {
  base: BaseOption;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(
        "pointer-events-none absolute inset-[8%] size-[84%] text-(--warm-muted)",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {base.visual === "bracelet" ? (
        <>
          <circle cx="50" cy="50" r="34" strokeWidth="2.4" />
          <circle cx="50" cy="50" r="26" strokeWidth="1.2" strokeDasharray="3 4" />
          <path d="M48 16h8m-4-4v8" strokeWidth="2" />
        </>
      ) : null}

      {base.visual === "necklace" ? (
        <>
          <path d="M17 22c4 35 17 57 33 57s29-22 33-57" strokeWidth="2.4" />
          <path d="M24 24c4 28 14 45 26 45s22-17 26-45" strokeWidth="1.2" strokeDasharray="3 4" />
          <path d="M50 69v8" strokeWidth="2" />
          <path d="m50 77-5 7h10z" strokeWidth="2" />
        </>
      ) : null}

      {base.visual === "keychain" ? (
        <>
          <circle cx="50" cy="23" r="13" strokeWidth="2.4" />
          <circle cx="50" cy="23" r="7" strokeWidth="1.2" />
          <path d="M50 36v11" strokeWidth="2.4" />
          <path d="M50 47c-18 0-25 10-25 22 0 10 10 17 25 17s25-7 25-17c0-12-7-22-25-22Z" strokeWidth="2.4" />
        </>
      ) : null}

      {base.visual === "ring" ? (
        <>
          <circle cx="50" cy="54" r="27" strokeWidth="3" />
          <circle cx="50" cy="54" r="18" strokeWidth="1.2" strokeDasharray="3 4" />
          <path d="m40 28 10-13 10 13-10 7Z" strokeWidth="2.2" />
        </>
      ) : null}

      {base.visual === "earrings" ? (
        <>
          <path d="M29 18c-7 0-7 12 0 12h4" strokeWidth="2.2" />
          <path d="M71 18c-7 0-7 12 0 12h4" strokeWidth="2.2" />
          <path d="M33 30v16m42-16v16" strokeWidth="2" />
          <path d="M33 46c-10 8-12 17-7 25 4 7 17 7 21 0 5-8 2-17-14-25Z" strokeWidth="2.4" />
          <path d="M75 46c-10 8-12 17-7 25 4 7 17 7 21 0 5-8 2-17-14-25Z" strokeWidth="2.4" />
        </>
      ) : null}

      {base.visual === "phone-charm" ? (
        <>
          <path d="M41 14c-10 13-13 26-7 37 4 8 14 12 16 22 2-10 12-14 16-22 6-11 3-24-7-37" strokeWidth="2.4" />
          <path d="M44 14c0-7 12-7 12 0" strokeWidth="2.4" />
          <path d="M50 73v13" strokeWidth="2" />
          <circle cx="50" cy="88" r="4" strokeWidth="2" />
        </>
      ) : null}
    </svg>
  );
}
