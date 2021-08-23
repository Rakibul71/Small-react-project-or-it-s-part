// import { useState } from "react";

// const Input = () => {
//   //   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <div>
//       <input placeholder="test search" type="text" />
//       <input
//         searchTerm={searchTerm}
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//         type="text"
//         placeholder="search here"
//       />
//     </div>
//   );
// };

// export default Input;

import React from "react";

const Input = ({ setSearchTerm }) => {
  return (
    <div>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="search here"
      />
    </div>
  );
};

export default Input;
