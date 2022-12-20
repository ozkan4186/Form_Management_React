import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const{user,setUser}=useContext(AuthContext)

  return (
    <div className="navs">
      <Link
        className="tem"
        to="/"
        style={{
          textShadow: "3px 3px 3px  black",
        }}
      >
        Home
      </Link>

      {user.login && (
        <Link
          onClick={(e) => setUser({ ...user, login: false })}
          className="tem"
          to="/login"
          style={{
            textShadow: "3px 3px 3px  black",
          }}
        >
          Logout
        </Link>
      )}
      {!user.login && (
        <Link
          className="tem"
          to="/login"
          style={{
            textShadow: "3px 3px 3px  black",
          }}
        >
          Login
        </Link>
      )}

      <Link
        className="tem"
        to="/teams"
        style={{
          textShadow: "3px 3px 3px  black",
        }}
      >
        Team
      </Link>
    </div>
  );
}

export default Navbar