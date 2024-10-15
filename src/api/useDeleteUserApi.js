import { gql, useMutation } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($id: Long!) {
    deleteUser(id: $id) {
      ok
      user {
        id
        name
      }
    }
  }
`;

export default function useGetUsersApi() {
  return useMutation(DELETE_USER, { refetchQueries: ["getAllUsers"] });
}
