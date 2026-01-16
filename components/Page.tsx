import { PAGE_HEIGHT, PAGE_WIDTH, PAGE_PADDING } from "@/constants/page";

export default function Page({
  children,
  pageNumber,
}: {
  children?: React.ReactNode;
  pageNumber?: number;
}) {
  return (
    <div className="relative mb-12">
      {/* Page */}
      <div
        className="bg-white shadow-2xl border border-gray-200"
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          padding: PAGE_PADDING,
        }}
      >
        {children}
      </div>

      {/* Page Number */}
      {pageNumber && (
        <div className="absolute bottom-[-32px] w-full text-center text-sm text-gray-500">
          Page {pageNumber}
        </div>
      )}
    </div>
  );
}
