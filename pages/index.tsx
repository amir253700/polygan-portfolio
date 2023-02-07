import Head from "next/head";
import AnimatedLogo from "../components/icons/AnimatedLogo";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingContext from "../context/LoadingContext";

export default function Home() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingCtx = useContext(LoadingContext);
  // const isLoading = loadingCtx.isLoading;

  useEffect(() => {
    if (loadingCtx.isLoading) {
      loadingCtx.finishLoading();
    }
  }, []);

  console.log(loadingCtx.isLoading);

  return (
    <>
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Amir Kazemi built with react and next.js"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        {loadingCtx.isLoading && <AnimatedLogo />}
        {!loadingCtx.isLoading && <Layout />}
      </main>
    </>
  );
}
