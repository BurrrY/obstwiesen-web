import { gql } from "@apollo/client";


export const GET_MEADOWS = gql`query Meadows {
                  meadows {
                      trees {
                          id
                          name
                      }
                      id
                      name
                  }
              }
              `;



export const CREATE_MEADOW = gql`mutation m($meadowName: String!) {
                    createMeadow(input: { name: $meadowName }) {
                        id
                        name
                    }
                }
          `;