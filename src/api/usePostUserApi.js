import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "./useGetUsersApi";

export const ADD_USER = gql`
  mutation PostUser($user: User!) {
    addUser(user: $user) {
      id
      name
      age
    }
  }
`;

export default function usePostUserApi() {
  return useMutation(ADD_USER, { refetchQueries: [GET_USERS, "getUsers"] });
}
