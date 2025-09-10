import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="w-full shadow-lg bg-white">
        <nav className="flex justify-between px-16 py-4">
          <h1 className="font-bold text-xl text-green-600">My Blog</h1>
          <div className="flex gap-4 font-normal">
            <Link className="hover:text-green-600" to="/">
              Home
            </Link>
            <Link className="hover:text-green-600" to="/create">
              New Post
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
