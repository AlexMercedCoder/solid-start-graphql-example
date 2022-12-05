// The Trips Array
const trips = [
  {
    location: "Miami, FL",
    mileage: 80,
  },
  {
    location: "Savannah, GA",
    mileage: 120,
  },
];


// functions for working with trips we can then convert into API routes or RPC calls
export function getTrips(){
    return trips
}

export function createTrip(newTrip){
    trips.push(newTrip)
    return trips
}

export function updateTrip(id, updatedTrip){
    trips[id] = updatedTrip
    return trips
}

export function deleteTrip(id){
    trips.splice(id, 1)
    return trips
}