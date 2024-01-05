import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Divider,
} from "@nextui-org/react";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="hidden md:flex gap-6 ml-20" justify="center">
        <NavbarItem>
          <Link
            to="/"
            className="block  lg:inline-block lg:mt-0 text-zinc-800 mr-4"
          >
            INICIO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/Museo"
            className="block lg:inline-block lg:mt-0 text-zinc-800 mr-4"
          >
            EL MUSEO
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="/Contacto"
            className="block lg:inline-block lg:mt-0 text-zinc-800 mr-4"
          >
            CONTACTO
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <NavbarItem className=" cursor-pointer p-2 bg-transparent data-[hover=true]:bg-transparent">
                ARCHIVO
              </NavbarItem>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu className="p-2 m-2 text-center">
            <DropdownItem base className="my-2">
              <Link to="/Exposiciones">EXPOSICIONES</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/Artistas">ARTISTAS</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            to="/Entradas"
            className="block lg:inline-block lg:mt-0 text-zinc-800 mr-4"
          >
            ENTRADAS
          </Link>
        </NavbarItem>
      </NavbarContent>

      <div className="md:hidden">
        <Button onClick={toggleMenu}>Menu</Button>
        {isMenuOpen && (
          <div className="flex flex-col gap-4  mt-60 bg-white justify-center py-2 px-4 rounded-md">
            <Link to="/" className=" flex justify-center">
              INICIO
            </Link>
            <Link to="/Museo" className=" flex justify-center">
              EL MUSEO
            </Link>
            <Link to="/Contacto" className=" flex justify-center">
              CONTACTO
            </Link>
            <Divider />
            <Link
              to="/Exposiciones"
              className=" flex justify-center text-zinc-400 hover:text-zinc-950 "
            >
              EXPOSICIONES
            </Link>
            <Link
              to="/Artistas"
              className=" flex justify-center  text-zinc-400 hover:text-zinc-950"
            >
              ARTISTAS
            </Link>
            <Divider />
            <Link to="/Entradas" className=" flex justify-center">
              ENTRADAS
            </Link>
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default Nav;
