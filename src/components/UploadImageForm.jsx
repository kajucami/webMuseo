import { Divider } from "@nextui-org/react";
import { useState } from "react";

//Controla el estado de carga de imagenes
const UploadImageForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        //"http://localhost/webMuseo/api/insertarArtistas.php",
        "http://localhost/webMuseo/api/insertarExpo.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Imagen subida correctamente");
      } else {
        console.error("Fallo al subir imagen");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-rows-2 gap-4 py-4">
      <h1 className="text-center font-bold">
        Insertar imágenes en la base de datos
      </h1>
      <Divider />
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-amber-500 text-zinc-900 rounded-full font-bold my-4 p-2"
        onClick={handleUpload}
      >
        Subir una imagen
      </button>
    </div>
  );
};

export default UploadImageForm;
