import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Card, Checkbox, CheckboxGroup, Divider } from "@nextui-org/react";
import axios from "axios";

//Mneja estados
const Entradas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [descuentoMenor7, setDescuentoMenor7] = useState(false);
  const [descuentoJubilado, setDescuentoJubilado] = useState(false);
  const [descuentoAmigo, setDescuentoAmigo] = useState(false);
  const [tipoDescuento, setTipoDescuento] = useState("");
  const [aceptaCondiciones, setAceptaCondiciones] = useState(false);
  const [prize, setPrize] = useState(false);
  const [showResume, setshowResume] = useState(false);
  const [cantidadEntradas, setCantidadEntradas] = useState(1);

  //Manejadores de datos y descuentos
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescuentoMenor7Change = () => {
    setTipoDescuento(descuentoMenor7 ? "" : "menor");
    setDescuentoMenor7(!descuentoMenor7);
    setDescuentoJubilado(false);
    setDescuentoAmigo(false);
  };

  const handleDescuentoJubiladoChange = () => {
    setTipoDescuento(descuentoJubilado ? "" : "jubilado");
    setDescuentoJubilado(!descuentoJubilado);
    setDescuentoMenor7(false);
    setDescuentoAmigo(false);
  };

  const handleDescuentoAmigoChange = () => {
    setTipoDescuento(descuentoAmigo ? "" : "amigo");
    setDescuentoAmigo(!descuentoAmigo);
    setDescuentoMenor7(false);
    setDescuentoJubilado(false);
  };

  const handleAceptaCondicionesChange = () => {
    setAceptaCondiciones(!aceptaCondiciones);
  };

  //Calcula el precio total de las entradas
  const calcularPrecioTotal = () => {
    const precioBase = 25;
    let precioConDescuento = precioBase;

    if (descuentoJubilado) {
      precioConDescuento = precioBase * 0.85; // 15% de descuento para jubilados
    } else if (descuentoAmigo) {
      precioConDescuento = precioBase * 0.8; // 20% de descuento para amigos del museo
    } else if (descuentoMenor7) {
      precioConDescuento = 0; // Menores de 7 años no pagan
    }

    return precioConDescuento * cantidadEntradas;
  };

  const handleCantidadEntradasChange = (value) => {
    const cantidad = Math.max(1, value);
    setCantidadEntradas(cantidad);
  };

  const handleSubmit = () => {
    const precioTotal = calcularPrecioTotal().toFixed(2);

    const formData = new FormData();
    formData.append("fechaEntrada", selectedDate.toISOString().split("T")[0]);
    formData.append("descuentoMenor7", descuentoMenor7 ? 1 : 0);
    formData.append("descuentoJubilado", descuentoJubilado ? 1 : 0);
    formData.append("descuentoAmigo", descuentoAmigo ? 1 : 0);
    formData.append("precioTotal", precioTotal);

    //Inserta datos en la base de datos
    axios
      .post("http://localhost/webMuseo/api/insertarEntrada.php", formData)
      .then((response) => {
        setshowResume(true);
        setPrize(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex justify-center mt-10">
        <div className="grid grid-rows-2 grid-cols-2 gap-3 text-center bg-zinc-100 w-2/4 p-4 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg pt-6">
            <h2>Selecciona una fecha</h2>
            <div className="my-4">
              <FontAwesomeIcon className="w-6 h-6 p-2" icon={faCalendarDays} />
              <FontAwesomeIcon className="w-6 h-6 p-2 " icon={faArrowDown} />
            </div>
            <DatePicker
              className="bg-zinc-300 rounded-lg text-center"
              value="fechaEntrada"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
            <div className="mt-4 text-center">
              {selectedDate && (
                <p className="text-lg font-semibold">
                  {selectedDate.toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4 text-center p-4 bg-zinc-200 rounded-lg shadow-lg">
            <h2 className="font-bold">Información del Comprador</h2>
            <Divider />
            <label>Nombre</label>
            <input
              className="rounded-full mx-4 text-center p-2"
              type="text"
              value={nombre}
              onChange={handleNombreChange}
            />
            <label>Correo Electrónico:</label>
            <input
              type="email"
              className="rounded-full mx-4 text-center p-2"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="pt-2 grid justify-center gap-3 p col-span-2">
            <Divider />
            <label>Cantidad de Entradas:</label>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="px-4 py-2 bg-amber-500 text-white rounded"
                onClick={() =>
                  handleCantidadEntradasChange(cantidadEntradas - 1)
                }
              >
                -
              </button>
              <span>{cantidadEntradas}</span>
              <button
                className="px-4 py-2 bg-amber-500 text-white rounded"
                onClick={() =>
                  handleCantidadEntradasChange(cantidadEntradas + 1)
                }
              >
                +
              </button>
            </div>

            <Divider />
            <CheckboxGroup
              className=" font-semibold "
              label="Descuentos"
              orientation="vertical"
              color="none"
            >
              <Checkbox
                className="mt-4"
                value="menor"
                type="checkbox"
                checked={descuentoMenor7}
                onChange={handleDescuentoMenor7Change}
              >
                Menor de 7 años (Gratis)
              </Checkbox>
              <Checkbox
                value="jubilado"
                type="checkbox"
                checked={descuentoJubilado}
                onChange={handleDescuentoJubiladoChange}
              >
                Jubilado (15% desc.)
              </Checkbox>
              <Checkbox
                value="amigo"
                type="checkbox"
                checked={descuentoAmigo}
                onChange={handleDescuentoAmigoChange}
              >
                Amigo del Museo (20% dec.)
              </Checkbox>
            </CheckboxGroup>
          </div>
          <Divider className="col-span-2" />
          <div className="flex col-span-2 justify-between p-4 mx-20">
            <label>
              Acepto las condiciones
              <Checkbox
                className="m-2"
                type="checkbox"
                checked={aceptaCondiciones}
                onChange={handleAceptaCondicionesChange}
              />
            </label>
            <button
              className="bg-amber-500 text-zinc-800 hover:text-zinc-100 rounded-full p-4"
              onClick={handleSubmit}
            >
              Comprar Entrada
            </button>
          </div>
          <Divider className="col-span-2" />
          {showResume && (
            <div className="col-span-2 ">
              <Card className="text-sky-900">
                <h1 className="font-black p-4">RESUMEN DE COMPRA</h1>
                <Divider />
                <div className="grid grid-rows-5 gap-8 mb-10 p-2">
                  <p>
                    <b>Nombre:</b>
                    <br /> {nombre}
                  </p>
                  <p>
                    <b>Email:</b>
                    <br /> {email}
                  </p>
                  <p>
                    <b>Fecha:</b>
                    <br /> {selectedDate && selectedDate.toLocaleDateString()}
                  </p>
                  {tipoDescuento && (
                    <p>
                      <b>Descuento Aplicado:</b>
                      <br /> {tipoDescuento}
                    </p>
                  )}
                  {prize && (
                    <div className="bg-sky-900 p-4 text-xl rounded-lg">
                      <p className="text-zinc-100 ">
                        <b>Precio Total:</b>
                        <br /> {calcularPrecioTotal().toFixed(2)}€
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Entradas;
