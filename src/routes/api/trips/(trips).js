// json function for sending json responses
import { json } from "solid-start";
import { getTrips, createTrip } from "~/lib/trips";

export async function GET(){
    // return the array of trips
    return json(getTrips())
}

export async function POST({request}){
    // get the request body
    const body = await new Response(request.body).json()
    // create new trip
    createTrip(body)
    // return all trips
    return json(getTrips())
}