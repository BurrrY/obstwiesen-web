import { gql } from "@apollo/client";


export const GET_MEADOW = gql`query Meadow($id: ID!) {
                  meadow (meadow_id: $id) {
                      id
                      name
                      banner {
                            parentID
                            path
                        }
                       trees {
                            id
                            name
                            lat
                            lang
                            banner {
                                  parentID
                                  path
                              }
                        }
                  }
              }
              `;


export const UPDATE_TREE = gql`
mutation UpdateTree($id: ID!, $lat: Float, $lang: Float, $name: String!, $variety: ID) {
    updateTree(
        id: $id
        input: { lat: $lat, lang: $lang, name: $name, variety: $variety }
    ) {
        id
        name
        lat
        lang
        variety {
            id
            name
            parent
        }
    }
}
`;


export const GET_MEADOW_FOR_TREE = gql`
query Meadow($id: ID!) {
  meadow (meadow_id: $id) {
       trees {
            id
            name
            lat
            lang
        }
  }
}
`;



export const GET_TREE = gql`query Tree($id: ID!) {
    tree(tree_id: $id) {
        id
        name
        lat
        lang
        banner {
              parentID
              path
          }
        variety {
            id
            name
            parent
        }
        events {
            id
            title
            description
            timestamp
            files {
                parentID
                path
            }
        }
    }
}
`;



export const GET_MEADOWS = gql`
query Meadows {
  meadows {
      trees {
          id
          lat
          lang
          name
      }
      banner {
            parentID
            path
        }
      id
      name
  }
}`;



export const GET_VARIETIES = gql`
query Varieties {
    varieties {
        id
        name
        parent
    }
}`;



export const CREATE_MEADOW = gql`
mutation m($meadowName: String!) {
    createMeadow(input: { name: $meadowName }) {
        id
        name
    }
}`;

export const MULTI_UPLOAD_FILES = gql`
mutation MultipleUpload($parentID: ID!, $files: [Upload!]!) {
    multipleUpload(
        parentID: $parentID
        files: $files
    ) {
        parentID
        path
    }
}
`;

export const UPLOAD_FILE = gql`
mutation SingleUpload($parentID: ID!, $file: Upload!) {
    singleUpload(
        parentID: $parentID
        file: $file
    ) {
        parentID
        path
    }
}
`;

export const CREATE_EVENT = gql`
mutation CreateEvent( $parentID: String!, $title: String!, $description: String!, $timestamp: String!, $files: [Upload!]) {
    createEvent(
        input: {
            parentID: $parentID
            title: $title
            description: $description
            timestamp: $timestamp
            files: $files
        }
    ) {
        id
        title
        description
        timestamp
    }
}
`;


export const CREATE_TREE = gql`
mutation CreateTree($meadow: String!, $name: String!) {
    createTree(input: { meadowID: $meadow, name: $name }) {
        id
        name
        lat
        lang
    }
}`;