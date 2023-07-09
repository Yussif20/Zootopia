import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1024px] flex justify-between mx-auto my-12">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link to="/visit">Visit</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
