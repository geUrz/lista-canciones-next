import { AuthProvider } from "@/contexts";
import { AppSocketProvider } from "@/contexts/AppSocket";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
      <AppSocketProvider>
        <Component {...pageProps} />
      </AppSocketProvider>
    </AuthProvider>
  );
}
