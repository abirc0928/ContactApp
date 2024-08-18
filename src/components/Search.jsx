import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import Model from "./Model";
function Search({onOpen,filterContacts}) {
return (
    <>
    <div className="flex text-white items-center ">
      <div className="relative flex   items-center flex-grow">
        <CiSearch className="absolute text-3xl ml-1"/>
        <input onChange={filterContacts}
          className="h-10 bg-transparent border border-white rounded-md flex-grow pl-9"
          type="text"
        />
      </div>
      <FaPlusCircle onClick={onOpen} className="text-3xl ml-2 cursor-pointer"/>
      {/* <Model isOpen={isOpen} onClose={onClose}>Hi</Model> */}
    </div>
    </>
    
  );
}

export default Search;
