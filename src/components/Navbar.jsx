import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navs">
      <Link className="tem" to="/">
        Home
      </Link>
      <Link className="tem" to="/login">
        Login
      </Link>
      <Link className="tem" to="/teams">
        Team
      </Link>
    </div>
  );
}

export default Navbar