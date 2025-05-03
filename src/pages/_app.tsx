import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { YearProvider } from "@/component/ContexAPI";
import ContextProvider from "@/component/LoginContex";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <YearProvider>
        <Component {...pageProps} />
      </YearProvider>
    </ContextProvider>
  );
}
