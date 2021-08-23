// object ,array, obj data fetching

// {
//   "result":[{ "name":"no"}]
// }

// import { useEffect, useState } from "react";

// const FetchApi = () => {
//   const [info, setInfo] = useState({ results: [] });
//   const fetchData = () => {
//     return fetch("https://randomuser.me/api")
//       .then((response) => response.json())
//       .then((data) => setInfo(data));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//       {info.results.map((elem) => {
//         return (
//           <div>
//             <h1>{elem.name.title}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FetchApi;

import React, { useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState({ hits: [] });
  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default FetchApi;
