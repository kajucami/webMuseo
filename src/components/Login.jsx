import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";

const COOKIE_NAME = "userSession";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const hasUserSession = cookies[COOKIE_NAME] === "true";
    setIsLoggedIn(hasUserSession);

    if (hasUserSession) {
      axios
        .post("http://localhost/webMuseo/api/verificar_admin.php", {
          username: username,
        })
        .then((adminResponse) => {
          setIsAdmin(adminResponse.data === "admin-login-success");
        })
        .catch((adminError) => {
          console.error("Error during admin verification:", adminError);
        });
    }
  }, [cookies, username]);

  //Maneja la sesión de usuario y administrador
  const handleLogin = () => {
    if (isLoggedIn) {
      setCookie(COOKIE_NAME, "false", { path: "/", maxAge: 0 });
      setIsLoggedIn(false);
      setLoginStatus("");
    } else {
      axios
        .post("http://localhost/webMuseo/api/iniciar_sesion.php", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.data === "login-success") {
            setCookie(COOKIE_NAME, "true", { path: "/", maxAge: 31536000 });
            setIsLoggedIn(true);
            axios
              .post("http://localhost/webMuseo/api/verificar_admin.php", {
                username: username,
              })
              .then((adminResponse) => {
                const adminLoginSuccess =
                  adminResponse.data === "admin-login-success";
                setIsAdmin(adminLoginSuccess);

                if (adminLoginSuccess) {
                  setLoginStatus("Sesión iniciada como administrador");
                } else {
                  setLoginStatus("Sesión iniciada");
                }
              })
              .catch((adminError) => {
                console.error(
                  "Error durante la verificación de administrador:",
                  adminError
                );
              });
          } else {
            setLoginStatus("Usuario o contraseña inválidos");
          }
        })
        .catch((error) => {
          console.error("Error durante el inicio de sesión:", error);
        });
    }
  };

  //Maneja cierre de sesión
  const handleLogout = () => {
    setCookie(COOKIE_NAME, "false", { path: "/", maxAge: 0 });
    setIsLoggedIn(false);
    setLoginStatus("Sesión cerrada");
  };

  return (
    <div className="flex justify-center">
      <Popover placement="bottom" backdrop="transparent">
        <PopoverTrigger>
          <Button color="foreground">
            <FontAwesomeIcon icon={faUser} className="text-amber-500" />
            Perfil de usuario
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Input
            className="p-1 py-2"
            type="text"
            variant="bordered"
            label="Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="p-1 py-2"
            type="password"
            variant="bordered"
            label="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoggedIn ? (
            <Button
              className="m-2 bg-sky-900 text-zinc-100 rounded-full"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          ) : (
            <Button
              color="foreground"
              className="m-2 bg-amber-500 text-zinc-800 hover:text-zinc-50 rounded-full"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
          )}

          {isLoggedIn ? (
            isAdmin ? (
              <Link to="/PanelAdmin">
                <Button
                  color="foreground"
                  className="m-2 rounded-full bg-sky-900 text-zinc-100 hover:bg-amber-500 hover:text-zinc-800"
                >
                  Panel de Administrador
                </Button>
              </Link>
            ) : (
              <Button
                color="warning"
                className="rounded-full my-2 "
                onPress={onOpen}
              >
                Contenido exclusivo
              </Button>
            )
          ) : null}
          {isLoggedIn && (
            <>
              <Modal
                size="2xl"
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              >
                <ModalContent className="mt-20">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-center font-bold text-sky-900">
                        Contenido exclusivo para amigos del museo
                      </ModalHeader>
                      <ModalBody className="grid grid-rows-2 justify-center items-center">
                        <Card className="col-span-12 sm:col-span-4 max-h-[300px] max-w-[900px]">
                          <CardHeader className="absolute z-10 p-6 top-1 flex-col !items-end">
                            <p className="text-2xl text-zinc-300/70 uppercase font-bold">
                              Próxima exposición
                            </p>
                            <h4 className="text-zinc-300 font-medium text-6xl">
                              StreetArts
                            </h4>
                          </CardHeader>
                          <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/src/assets/img/sebas2.jpg"
                          />
                        </Card>

                        <Card className="col-span-12 sm:col-span-4 max-h-[300px] max-w-[900px]">
                          <CardHeader className="absolute z-10 pr-8 pt-6 top-1 flex-col !items-end">
                            <h4 className="text-zinc-900 font-medium text-6xl">
                              Keith Haring
                            </h4>
                            <p className="text-2xl text-zinc-900/70 uppercase font-bold">
                              Contenido exclusivo ESTE MES
                            </p>
                          </CardHeader>
                          <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/src/assets/img/haringPortada.jpeg"
                          />
                        </Card>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          className="text-zinc-100 rounded-full"
                          color="primary"
                          onPress={onClose}
                        >
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          )}
          {isLoggedIn && loginStatus && <p>{loginStatus}</p>}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Login;
