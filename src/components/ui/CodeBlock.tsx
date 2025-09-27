"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ShikiHighlighter from "react-shiki";
import type { BundledLanguage } from "shiki";

export function CodeBlock({ code, lang }: { code: string; lang: BundledLanguage }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-card h-[150px] w-full rounded-lg" />;
  }

  const shikiTheme = resolvedTheme === "dark" ? "monokai" : "github-light-high-contrast";

  return (
    <ShikiHighlighter language={lang} theme={shikiTheme}>
      {code}
    </ShikiHighlighter>
  );
}
