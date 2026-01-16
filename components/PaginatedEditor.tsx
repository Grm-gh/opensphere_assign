"use client";

import { useRef, useState } from "react";
import Editor from "./Editor";
import Page from "./Page";
import { CONTENT_HEIGHT } from "@/constants/page";

export default function PaginatedEditor() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);

  const recalculatePages = () => {
    if (!contentRef.current) return;

    const contentHeight = contentRef.current.scrollHeight;
    const pagesNeeded = Math.max(
      1,
      Math.ceil(contentHeight / CONTENT_HEIGHT)
    );

    setPageCount(pagesNeeded);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        {Array.from({ length: pageCount }).map((_, index) => (
          <Page key={index} pageNumber={index + 1}>
            {index === 0 && (
              <div ref={contentRef}>
                <Editor onUpdate={recalculatePages} />
              </div>
            )}
          </Page>
        ))}
      </div>
    </div>
  );
}
