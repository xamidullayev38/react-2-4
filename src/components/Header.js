// import {FaUserCircle} from 'react-icons';

function Header() {
  return (
    <div className="border-bottom p-3 d-flex justify-content-between align-items-center">
      <button className="btn ">☰</button>
      <div className="d-flex justify-content-end align-items-center gap-2">
      {/* <FaUserCircle size={32} /> */}
      <span>Axror</span>
    </div>
    </div>
  );
}

export default Header;
