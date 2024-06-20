import React from "react";
import axios from "./utils/axiosConfig";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
const DeleteButton = ({ id }) => {
	const authHeader = useAuthHeader(); // Obtén el token de autorización
	const handleDelete = () => {
		const axiosConfig = {
			headers: { Authorization: authHeader },

			data: { id }, // Incluye el id en el cuerpo de la solicitud
		};

		axios
			.delete("/files/delete", axiosConfig)
			.then((response) => {
				console.log(`Archivo con id ${id} eliminado con éxito`);
				// Aquí puedes actualizar el estado de tu aplicación para reflejar la eliminación
			})
			.catch((error) => {
				console.error(
					`Error eliminando el archivo con id ${id}:`,
					error
				);
			});
	};

	return (
		<button onClick={handleDelete} style={{ color: "red" }}>
			Eliminar
		</button>
	);
};

export default DeleteButton;
