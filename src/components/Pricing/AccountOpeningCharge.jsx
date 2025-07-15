import React from 'react'
import TableRow from '../Utility/TableRow'

const AccountOpeningCharge = () => {
  return (
    <div className='px-[4rem] py-[4rem] lg:px-[20rem] flex flex-col gap-[2rem]'>
        <h1 className='text-[2.5rem] font-[500] text-gray-700'>Charges for account opening</h1>
        <div>
            <div className='w-full bg-white p-[1.5rem] text-[1.4rem] font-[500] text-gray-600 border-[#bcbbbb84] border-1 flex justify-between'>
                <span>Type of account</span>
                <span className='pr-[1rem] lg:pr-[8rem]'>Charges</span>
            </div>
            <TableRow field={"Online account"} free={true}  />
            <TableRow field={"Offline account"} free={true} bg={"#FBFBFB"}  />
            <TableRow field={"NRI account (offline only)"} value={"₹ 500"}  />
            <TableRow field={"Partnership. LLP, HUF, or Corporate account (Offline only)"} value={"₹ 500"} bg={"#FBFBFB"} />
        </div>
    </div>
  )
}

export default AccountOpeningCharge