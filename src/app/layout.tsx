import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
