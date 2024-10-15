import { gql, useQuery } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      age
    }
  }
`;

export default function useGetUsersApi() {
  return useQuery(GET_USERS);
}
