import React, { useState } from "react";
import axios from "axios";

const HandleUsers = () => {
  const [selectedUserId, setSelectedUserId] = useState("");

  //Maneja eliminación de usuarios
  const handleDeleteUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost/webMuseo/api/admin.php",
        {
          action: "eliminar",
          usuarioID: selectedUserId,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  //Maneja actualización de usuarios
  const handleUpdateUser = async () => {
    try {
    } catch (error) {
      console.error("Error al modificar usuario:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <label className="flex justify-center text-center col-span-2 p-4 font-bold">
        Gestion de usuarios
      </label>
      <input
        className="col-span-2 bg-slate-200 rounded-full p-1 m-2 text-center "
        type="text"
        value={selectedUserId}
        placeholder="id de usuario"
        onChange={(e) => setSelectedUserId(e.target.value)}
      />
      <button
        className="bg-sky-900 text-zinc-100 rounded-full p-2 m-2"
        onClick={handleDeleteUser}
      >
        Eliminar Usuario
      </button>
      <button
        className="bg-sky-900 text-zinc-100 rounded-full p-2 m-2"
        onClick={handleUpdateUser}
      >
        Modificar Usuario
      </button>
    </div>
  );
};

export default HandleUsers;
