import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Link to="/">
          <Button className="text-zinc-800" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Logout;
