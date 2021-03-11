import React, { useState, useEffect, useRef, useContext } from "react";
import WithEffect from "./hoc/withEffect";
import msgContext from "./context/context";
const Effect = ({ message, counter }) => {
  // for previous state
  // const usePrevious = (prevState, prevProps) => {
  //   const ref = useRef("");
  //   console.log("prvs 1", ref);
  //   useEffect(() => {
  //     ref.current = { prevState, prevProps };
  //     console.log("prvs 2");
  //   });
  //   return ref.current;
  // };
  ////////
  const [count, setCount] = useState(0);
  // getting previous state
  // const { prevState: prevCount, prevProps: prevMessage } = usePrevious(
  //   count,
  //   message
  // );
  // console.log();
  /////////////////
  const ref = useRef(count);
  useEffect(() => {
    ref.current = count;
  }, [count]);

  // for referencing an element
  const refElement = useRef(null);

  // alternate of Consumer in FC
  const context = useContext(msgContext);

  useEffect(() => {
    console.log("Effect");
    //http request...
    setTimeout(() => {
      //alert("Data saved.");
    }, 2000);
    return () => {
      //after removing elements from dom just like comWillUnmount
      console.log("effect cleanup.");
      //clearTimeout(timer);
    };
  }, []);
  // empty array works as componentDidMount runs only once

  useEffect(() => {
    console.log("useEffect");
    //refElement.current.focus();
    //http request...
    const timer = setTimeout(() => {
      //alert("Data saved.");
    }, 2000);
    return () => {
      // after removing elements from dom just like comWillUnmount
      console.log("effect cleanup.");
      clearTimeout(timer);
    };
  }, [message]);

  useEffect(() => {
    // did both mount and update
    // will for every time when rendering..
    console.log("2nd useEffect");
    //http request...
    const timer = setTimeout(() => {
      //alert("2nd Data saved.");
    }, 2000);
    return () => {
      console.log("2nd effect cleanup.");
      clearTimeout(timer);
    };
  });

  return (
    <WithEffect>
      {console.log("Effect Body")}
      <h1>Effect</h1>
      <h2>{message}</h2>
      <h3>
        State Now:{count} | Props Now:{message} and State Before:{ref.current} |
        Props Before:{"prevMessage"}
      </h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      {/* <msgContext.Consumer>
        {(context) => {
          return <p>{context.msgOne}</p>;
        }}
      </msgContext.Consumer> */}
      {/* alternate way of Consumer in FC */}
      <p>{context.msgOne}</p>
      <p>Base counter:{counter}</p>

      <input ref={refElement} type="text" />
    </WithEffect>
  );
  //   return [
  //       {console.log("Effect Body")},
  //       <h1>Effect</h1>,
  //       <h2>{message}</h2>
  //   ];

  //   return (
  //      <React.Fragment>
  //       {console.log("Effect Body")},
  //       <h1>Effect</h1>,
  //       <h2>{message}</h2>
  //       </React.Fragment>
  //   );
};

export default React.memo(Effect);
//take snapshot and look if any input/props change this will then re-render
// otherwise not.
//like shouldComponentUpdate
