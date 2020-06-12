import React, { useState } from "react";

const UseStateExample = () => {
  const [name, setName] = useState("Shenay Yilmaz");
  const [age, setAge] = useState(30);
  return (
    <>
      <h1>
        {name} - {age}
      </h1>
      <button onClick={() => setName("Sheni developer")}>Change Name</button>
      <button onClick={() => setAge(40)}>Change Age</button>
    </>
  );
};

export default UseStateExample;
