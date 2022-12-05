import { createRouteData } from "solid-start";
import Trips from "~/components/Trips";

// define our route data, server provided data to frontend
export function routeData() {
return createRouteData(async () => {
  // fetch data from api endpoint
  const response = await fetch("http://localhost:3000/api/trips")
  const data = await response.json()
  return data
});
}

export default function Home() {
  return (
    <main>
      <Trips/>
    </main>
  );
}
