import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      {/* Sidebar */}
      <div className="p-4 border-end" style={{ width: "250px" }}>
        <h2 className="text-danger mb-4 fw-bold">RPOD Weebs Wikia Game</h2>
        <nav className="nav flex-column border-top">
          <NavLink to="/" className="nav-link text-white">
            Guess The Anime
          </NavLink>
          <NavLink to="/characters" className="nav-link text-white">
            Guess The Characters
          </NavLink>
          <NavLink to="/opening" className="nav-link text-white">
            Guess The Opening
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
