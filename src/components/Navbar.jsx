import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div
      className="navbar-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        paddingRight: '10rem',
      }}
    >
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div>
        <input type="text" placeholder="สถานที่ที่คุณต้องการไป.." />
      </div>
      <div>
        <input type="text" placeholder="ร้านอาหาร/คาเฟ่" />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
