import React from 'react'
import { Link } from 'react-router-dom';
export default function FirstLayout() {
  return (
    <div >
      <h1 >
        Welcome to Shantela's Craft Beer
      </h1>
      <button >
        <Link to="admin/thirdLayout" >Click here</Link>
      </button>
    </div>
  );
}
