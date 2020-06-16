import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Error 404</h2>
      <span>pagina no encontrada</span>
      <br />
      <br />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

export default NotFound;
