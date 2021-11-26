import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("Listening on http://localhost:8000");
await serve((_req) => {
  return new Response("Hello Deno!", {
    headers: { "content-type": "text/plain" },
  });
});
