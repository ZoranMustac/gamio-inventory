import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import "@component/pages/cards/cards.css";
import "@component/pages/header/header.css";
import "@component/pages/titles/title.css";
import "@component/pages/user/user.css";
import "@component/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
