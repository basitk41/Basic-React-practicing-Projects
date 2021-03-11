import React, { useState } from "react";
import Form from "../form/Form";
import Table from "../table/Table";
const Output = (props) => {
  const [state, setState] = useState({ id: 0, name: "", age: "" });
  const [data, setData] = useState([]);
  const [idInc, setId] = useState({ id: 1 });
  //console.log(data);
  const handleChange = (e) => {
    const input = { ...state };
    input[e.target.name] = e.target.value;
    setState({ ...input });
  };
  const handleInsert = () => {
    const org = [...data];
    const st = { ...state };
    if (st.name !== "" && st.age !== "") {
      delete st.id;
      //console.log(st);
      const rec = { id: idInc.id, ...st };
      //console.log(org);
      org.push(rec);
      //console.log(org);
      setData([...org]);
      setId({ id: idInc.id + 1 });
      setState({ id: 0, name: "", age: "" });
    }
  };
  const handleDelete = (id) => {
    //by splice will give the index in map function. Actually done for the data with no key.
    //console.log("Delete clicked.", id);
    const filtered = data.filter((a) => a.id !== id);
    setData(filtered);
  };
  const handleState = (id) => {
    const filtered = data.filter((a) => a.id === id);
    //console.log(filtered);
    setState(...filtered);
  };
  const handleUpdate = () => {
    //console.log("updated");
    const org = [...data];
    //console.log(org);
    // const index = org.indexOf(state);
    const index = org.findIndex((x) => x.id === state.id);
    //console.log(index);
    org[index] = { ...state };
    //console.log(org);
    setData([...org]);
    setState({ id: 0, name: "", age: "" });
  };
  const style = {
    width: "70%",
    margin: "auto",
    paddingTop: "10px",
  };
  return (
    <div style={style}>
      <Form
        title={props.title}
        state={state}
        handleChange={handleChange}
        handleInsert={handleInsert}
        handleUpdate={handleUpdate}
      />
      <br />
      <br />
      <Table
        data={data}
        handleState={handleState}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Output;
