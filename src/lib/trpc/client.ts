import {
    createTRPCProxyClient,
    httpBatchLink,
    loggerLink,
  } from '@trpc/client';
  import type { AppRouter } from "./router";
  

  // create the client, export it
  export const client = createTRPCProxyClient<AppRouter>({
    links: [
        // will print out helpful logs when using client
        loggerLink(),
        // identifies what url will handle trpc requests 
        httpBatchLink({ url: "http://localhost:3000/trpc" })
    ],
  });