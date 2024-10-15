import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($id: Long!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      name
      email
    }
  }
`;

export default function useUpdateUserApi() {
  return useMutation(UPDATE_USER, { refetchQueries: ["getAllUsers"] });
}
