// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import First from "../Components/First";
const App = (props) => {
  const [personState, setPerson] = useState({
    person: [
      { id: 1, name: "Basit", age: 22 },
      { id: 2, name: "Ali", age: 23 },
    ],
  });
  //const [otherState, setOther] = useState({ other: "other" });
  const handleSwap = (newName) => {
    // console.log(personState);
    // console.log(otherState);
    // setOther({ other: "A" });
    // console.log(otherState);
    const a = [...personState.person];
    a[0].name = newName;
    a[1].name = "Jan";
    // console.log(a);
    setPerson({ person: [...a], other: "Other" });
    // console.log(personState);
  };

  const handleChange = (newName) => {
    const a = [...personState.person];
    a[0].name = newName.target.value;
    // console.log(a);
    setPerson({ person: [...a], other: "Other" });
  };
  return (
    <div className="container">
      <br />
      <button className="btn btn-info" onClick={() => handleSwap("khan")}>
        Swap
      </button>
      <br />
      {personState.person.map((a) => {
        return (
          <First
            key={a.id}
            click={() => handleSwap("Khan")}
            handleChange={handleChange}
            // click={handleSwap.bind(this,'Khan')}
            name={a.name}
            age={a.age}
          ></First>
        );
      })}
    </div>
  );
};

// class App extends Component {
//   state = {
//     person: [
//       { id: 1, name: "Basit", age: 22 },
//       { id: 2, name: "Ali", age: 23 },
//     ],
//   };
//   handleSwap = () => {
//     const person = this.state.person;
//     person[0].name = "Khan";
//     person[1].name = "Jan";
//     this.setState({ person });
//   };
//   render() {
//     return (
//       <div className="container">
//         <br />
//         <button className="btn btn-info" onClick={this.handleSwap}>
//           Swap
//         </button>
//         <br />
//         {this.state.person.map((a) => {
//           return <First key={a.id} name={a.name} age={a.age}></First>;
//         })}
//       </div>
//     );
//   }
// }

// export default App;
export default App;
