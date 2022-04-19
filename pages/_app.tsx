import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // return <>{isLoading ? <LoadingScreen /> : <Component {...pageProps} />}</>;
  return <Component {...pageProps} />;
}

export default MyApp;
