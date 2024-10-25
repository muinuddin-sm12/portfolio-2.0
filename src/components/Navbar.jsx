import Container from "./shared/Container";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <Container>
      <div className="border-b border-gray-800 sticky top-0">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img className="w-16" src={logo} alt="" />
          </Link>
          <div>
            {menuItem.map((item) => (
              <Link className="ml-10 text-gray-400 text-sm" key={item} to={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
