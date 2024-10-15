import { gql, useQuery } from "@apollo/client";

export const GET_ONE_USER = gql`
  query GetOneUser($id: String!) {
    user(id: $id) {
      id
      name
      age
    }
  }
`;

export default function useGetUsersApi() {
  return useQuery(GET_ONE_USER);
}
