import { useEffect } from "react";
import useGetAllUsersApi from "../api/useGetAllUsersApi";

const RequestForm = ({ mode, setData }) => {
  const { loading, error, data } = useGetAllUsersApi();
  console.log(loading, error, data);

  useEffect(() => {
    console.log(loading, error, data);
  }, [data]);

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
          <input type="text" placeholder="username" />
          <input type="number" placeholder="age" />
          <button type="submit">추가</button>
        </>
      )}

      {mode === "delete" && (
        <>
          <input type="number" placeholder="userId" />
          <button type="submit">삭제</button>
          <input type="hidden" name="_method" value="DELETE" />
        </>
      )}
      {mode === "update" && (
        <>
          <input type="number" placeholder="userId" />
          <input type="text" placeholder="username" />
          <input type="number" placeholder="age" />
          <button type="submit">수정</button>
        </>
      )}
    </>
  );
};

export default RequestForm;
