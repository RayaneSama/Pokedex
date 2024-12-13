const NavBar = () => {
  return (
    <nav className="bg-black py-4 shadow-lg mb-4">
      <ul className="flex justify-around items-center space-x-8">
        <li className="italic text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <li className="italic text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Projects
        </li>
        <li className="italic text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Contacts
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
