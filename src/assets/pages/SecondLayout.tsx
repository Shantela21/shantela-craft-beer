import React from 'react'
import { Link } from 'react-router-dom';

export default function SecondLayout() {
  return (
    <div>
      <h2>This is the second page of the layout.</h2>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <button>
          <Link to="/">Submit</Link>
        </button>
      </form>
    </div>
  );
}
