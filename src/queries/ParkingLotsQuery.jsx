import {gql} from "@apollo/client";

export const ParkingLotsQuery = gql`
  query ParkingLots($vehicleType: String) {
    parkingLots (
        pagination: { pageSize: 50 },
        filters: {
            vehicle_types: {
                type:{
                    eq: $vehicleType
                }
            }
        }
    ) {
        data {
            id
            attributes {
                name
                address
                latitude
                longitude
                vehicle_types {
                    data {
                        id
                        attributes {
                            type
                            places
                            rates {
                                frequency
                                price
                            }
                        }
                    }
                }
            }
        }
    }
}
`;