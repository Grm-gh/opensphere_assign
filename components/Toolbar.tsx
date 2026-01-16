"use client";

import { Editor } from "@tiptap/react";

export default function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  const button =
    "px-3 py-1 rounded border text-sm hover:bg-gray-100 transition";

  return (
    <div className="sticky top-4 z-10 mb-6 flex gap-2 bg-white p-3 shadow-md rounded-lg border">
      <button
        className={button}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>

      <button
        className={button}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>

      <button
        className={button}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        Bullet List
      </button>

      <button
        className={button}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>

      <button
        className={button}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
    </div>
  );
}
