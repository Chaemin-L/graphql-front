const RequestForm = ({ mode, setData }) => {
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
          <input type="text" placeholder="username" />
          <input type="number" placeholder="age" />
        </>
      )}

      {mode === "delete" && (
        <>
          <input type="number" placeholder="userId" />
        </>
      )}
      {mode === "update" && (
        <>
          <input type="number" placeholder="userId" />
          <input type="text" placeholder="username" />
          <input type="number" placeholder="age" />
        </>
      )}

      <button type="submit">전송</button>
    </>
  );
};

export default RequestForm;
