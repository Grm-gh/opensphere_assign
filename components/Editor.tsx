"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

interface EditorProps {
  onUpdate: () => void;
}

export default function Editor({ onUpdate }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
    ],
    content: "<p>Start typing your document...</p>",
    immediatelyRender: false,
    onUpdate,
  });

  if (!editor) return null;

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose max-w-none outline-none"
      />
    </>
  );
}
