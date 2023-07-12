import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "@/components/navbar";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

/*
 título do filme, a data de lançamento e a classificação.
 */
