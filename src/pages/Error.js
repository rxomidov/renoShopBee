import React from "react";
import {Link} from "react-router-dom";

export default function Error() {
  return <section className="error-page">
    <div className="container text-center">
      <h1>oops! it's a dead end</h1>
      <Link to='/' className="btn btn-primary">
        back to home
      </Link>
    </div>
  </section>;
}
