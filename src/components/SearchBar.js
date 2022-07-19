// import React, { useState } from "react";
// import { Input, Radio } from "antd";
//
// import { SEARCH_KEY } from "../constants";
//
// const { Search } = Input;
//
// function SearchBar(props) {
//     const [searchType] = useState(SEARCH_KEY.keyword);
//     const [error, setError] = useState("");
//
//
//     const handleSearch = (value) => {
//         if (searchType !== SEARCH_KEY.keyword && value === "") {
//             setError("Please input your search keyword!");
//             return;
//         }
//         setError("");
//         props.handleSearch({ keyword: value });
//
//         // props.handleSearch({ type: searchType, keyword: value });
//     };
//
//     return (
//         <div className="search-bar">
//             <Search
//                 placeholder="input search text"
//                 enterButton="Search"
//                 size="large"
//                 onSearch={handleSearch}
//
//             />
//             <p className="error-msg">{error}</p>
//
//
//         </div>
//     );
// }
//
// export default SearchBar;