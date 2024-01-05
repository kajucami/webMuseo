//-- Inserción en base de datos desde página Signup --

const insertarUsuario = async (userData) => {
  try {
    const response = await axios.post("http://localhost/webMuseo/api/registro_usuario.php", userData);
    console.log(response.data)
  } catch (error) {
    console.error("Error al enviar datos:", error);
    throw error;
  }
};

export { insertarUsuario }


