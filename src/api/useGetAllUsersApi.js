import { gql, useQuery } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      email
    }
  }
`;

export default function useGetAllUsersApi() {
  return useQuery(GET_ALL_USERS);
}
