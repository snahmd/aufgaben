const Nav = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="logo">
        <a className="text-[#979ed5] font-extrabold" href="#">
          JS.
        </a>
      </div>
      <ul className="flex justify-around gap-8">
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">skills</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <button>
          <a href="">☯️</a>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
