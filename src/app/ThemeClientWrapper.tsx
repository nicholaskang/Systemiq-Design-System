"use client";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/tokens/theme";

export function ThemeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
