import "./globals.css";

export const metadata = {
  title: "Tiptap Pagination Editor",
  description: "Document editor with real-time pagination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f1f3f4]">{children}</body>
    </html>
  );
}
