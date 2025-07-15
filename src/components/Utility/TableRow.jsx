import React from "react";

const TableRow = ({ field, value, free, bg }) => {
  return (
    <div className="w-full bg-white p-[1.5rem] text-[1.4rem] font-[400] text-gray-500 border-[#bcbbbb84] border-1 border-t-0 flex justify-between" style={{backgroundColor:bg}}>
      <span>{field}</span>
      {free == true ? (
        <span className="pr-[1rem] lg:pr-[8rem]">
          <span className="bg-green-600 flex justify-center items-center text-[1.3rem] text-white px-[0.5rem] py-[0.1rem] rounded-[2px]">
            FREE
          </span>
        </span>
      ) : (
        <span className="flex shrink-0 px-[1rem ] justify-center items-center"><span className="pr-[1rem] lg:pr-[8rem]">{value}</span></span>
      )}
    </div>
  );
};

export default TableRow;
