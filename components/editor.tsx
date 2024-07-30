"use client";

import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import { PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

// Import the required CSS files
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  const handleEditorChange = () => {
    const blocks = editor.document;
    onChange(JSON.stringify(blocks, null, 2));
  };

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        editable={editable}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
