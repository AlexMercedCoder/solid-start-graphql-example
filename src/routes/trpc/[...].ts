import { APIEvent } from "solid-start/api";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from "~/lib/trpc/router";
import { client } from "~/lib/trpc/client";

// define the handler for handling requests
const handler = (event: APIEvent) => 
  // adapts tRPC to fetch API style requests
  fetchRequestHandler({
    // the endpoint handling the requests
    endpoint: '/trpc',
    // the request object
    req: event.request,
    // the router for handling the requests
    router: appRouter,
    // any arbitary data that should be available to all actions
    createContext: () => ({cheese: "gouda"}),
  });


// use handler to handle all get/post requests to /trpc/*
export const GET = handler;
export const POST = handler;