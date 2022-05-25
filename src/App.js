import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  const [val, setVal] = React.useState("");
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    function: () => {
      document.title = val;
      //inputRef.current.focus();
      console.log("executei a function");
    }
  }));

  return (
    <>
      <input
        ref={inputRef}
        val={val}
        onChange={(e) => setVal(e.target.value)}
        {...props}
      />

      <input type="text" placeholder="text input" />
      <input type="password" placeholder="password" />
    </>
  );
});

const App = () => {
  const ref = React.useRef(null);
  const onBlur = () => {
    console.log("executei onBlur "); // Only contains one property!
    ref.current.function();
  };

  return (
    <MyInput
      ref={ref}
      onBlur={onBlur}
      //onFocus={onFocus}
    />
  );
};

export default App;
