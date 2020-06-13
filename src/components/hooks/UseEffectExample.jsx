import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Shenay");

  useEffect(() => {
    console.log("helllo");

    // burada func tanimlayip cagriyorum ki hic bir seyi return yapmamasi gerekiyo useEffect / eger return yapiyosan error veriyo
    const getUser = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      setUser(res.data[0]);
    };

    getUser();
  }, [searchQuery]);

  // console.log("user", user);
  // console.log("searchQuery", searchQuery);
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {user ? (
        <p>
          Name:{user.name} - UserName : {user.username}
        </p>
      ) : (
        "No user found it"
      )}
    </div>
  );
};

export default UseEffectExample;
