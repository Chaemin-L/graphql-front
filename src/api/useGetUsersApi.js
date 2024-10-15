import { gql, useQuery } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      email
    }
  }
`;

export default function useGetUsersApi() {
  return useQuery(GET_ALL_USERS);
}
