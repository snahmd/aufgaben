import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <header className="page-header">Header</header>
      <Outlet />
      <footer className="page-footer">Footer</footer>
    </div>
  );
}
