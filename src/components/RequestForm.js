import { useState } from "react";
import usePostUserApi from "../api/usePostUserApi";
import useDeleteUserApi from "../api/useDeleteUserApi";

const RequestForm = ({ mode, setData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState();

  const [postUser] = usePostUserApi();
  const [deleteUser] = useDeleteUserApi();

  if (mode === "get") return <></>;
  return (
    <>
      <h2>{mode.toUpperCase()}</h2>
      {/* {mode === "get" && (
        <>
          <input type="number" placeholder="userId" />
          <button>조회</button>
        </>
      )} */}

      {mode === "post" && (
        <>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => postUser({ variables: { name, email } })}
          >
            전송
          </button>
        </>
      )}

      {mode === "delete" && (
        <>
          <input
            type="number"
            placeholder="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => deleteUser({ variables: { id: userId } })}
          >
            전송
          </button>
        </>
      )}
      {mode === "update" && (
        <>
          <input type="number" placeholder="userId" />
          <input type="text" placeholder="username" />
          <input type="number" placeholder="age" />
          <button type="submit">전송</button>
        </>
      )}
    </>
  );
};

export default RequestForm;
