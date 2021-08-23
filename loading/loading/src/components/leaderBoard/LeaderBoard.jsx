import React from "react";
import { useEffect, useState } from "react";
import Input from "../input/Input";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/codingshot/random-data/main/daolist.txt"
    );
    setUsers(await response.json());

    // console.log(res);
  };
  useEffect(() => {
    getUser();
  }, []);

  // loading data
  const [noOfElement, setnoOfElement] = useState(4);
  const slice = users.slice(0, noOfElement);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  // using serach
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Input setSearchTerm={setSearchTerm}></Input>

      <h1>Rakibull Islam</h1>
      {slice
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (val.aum.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        .map((val) => {
          return (
            <div>
              <h1>{val.name}</h1>
              <p>{val.aum}</p>
            </div>
          );
        })}
      <button onClick={() => loadMore()}>Load More</button>
    </div>
  );
};

export default LeaderBoard;
