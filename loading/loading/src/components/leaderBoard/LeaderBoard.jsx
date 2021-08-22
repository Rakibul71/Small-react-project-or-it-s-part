import React from "react";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Rakibull Islam</h1>
      {slice.map((curElem) => {
        return <h1>{curElem.name}</h1>;
      })}
      <button onClick={() => loadMore()}>Load More</button>
    </div>
  );
};

export default LeaderBoard;
