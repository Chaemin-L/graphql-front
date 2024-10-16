import { useState } from "react";
import RequestForm from "./components/RequestForm";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [mode, setMode] = useState("get");

  const onChangeMode = (e) => setMode(e.target.value);

  return (
    <main>
      <div id="form-area">
        <h2>요청</h2>
        <select onChange={onChangeMode}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="delete">DELETE</option>
          <option value="update">UPDATE</option>
        </select>
        <RequestForm mode={mode} setData={setData} />
      </div>
      <div id="form-area">
        <h2>응답</h2>
        <div>
          {Object.entries(data)?.map((d) => {
            return (
              <div key={d.id}>
                <p>id: {d.id}</p>
                <p>name: {d.name}</p>
                <p>email: {d.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
