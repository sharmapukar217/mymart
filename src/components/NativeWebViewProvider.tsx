"use client";

import { createContext, useContext, type ReactNode } from "react";

interface NativeWebViewContextValue {
  isNativeWebView: boolean;
}

const NativeWebViewContext = createContext<NativeWebViewContextValue>({
  isNativeWebView: false
});

interface NativeWebViewProviderProps {
  children: ReactNode;
  isNativeWebView: boolean;
}

export function NativeWebViewProvider({
  children,
  isNativeWebView
}: NativeWebViewProviderProps) {
  return (
    <NativeWebViewContext.Provider value={{ isNativeWebView }}>
      {children}
    </NativeWebViewContext.Provider>
  );
}

export function useIsNativeWebView() {
  return useContext(NativeWebViewContext).isNativeWebView;
}
