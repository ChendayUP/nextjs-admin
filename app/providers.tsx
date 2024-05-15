"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Layout } from "../components/layout/layout";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  fullScreen?: boolean;
}

export function Providers({ children, themeProps, fullScreen = false }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="system" attribute="class" {...themeProps}>
        {fullScreen ? <>{children}</> : <Layout>{children}</Layout>}
        {/* <Layout>
          {children}
        </Layout> */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
