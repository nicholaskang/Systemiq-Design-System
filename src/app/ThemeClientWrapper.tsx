"use client";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/theme/theme";

export function ThemeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
