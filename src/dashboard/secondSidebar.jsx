import React from 'react'
import { BiGridSmall } from 'react-icons/bi';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { MdOutlinePayments } from 'react-icons/md';

export default function secondSidebar() {
  return (
    <div className="secondSider container">
      <ul>
        <li className="active">
          <BiGridSmall />
          <span>All Companies</span>
        </li>
        <li>
          <BsFillCheckSquareFill />
          <span>Projects</span>
        </li>
        <li>
          <MdOutlinePayments />
          <span>Transactions</span>
        </li>
      </ul>

    
    </div>
  );
}
