import React, { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

import Card from "../Card";

const Public = () => {
	const [files, setFiles] = useState([]);
	const authHeader = useAuthHeader(); // Asegúrate de llamar useAuthHeader como función
	console.log(authHeader);
	useEffect(() => {
		// Construye la solicitud Axios
		const axiosConfig = {
			headers: { Authorization: authHeader }, // Llama a authHeader como función para obtener el token
		};

		console.log("Configuración de Axios:", axiosConfig); // Muestra la configuración de Axios en la consola

		axios
			.get("/public", axiosConfig)
			.then((response) => {
				console.log("Respuesta de Axios:", response); // Muestra la respuesta de Axios en la consola
				setFiles(response.data);
			})
			.catch((error) => {
				console.error("Error fetching files:", error);
			});
		console.log(files);
	}, [authHeader]); // Incluye authHeader en el array de dependencias si es necesario

	return (
		<div>
			<h1>Lista de Archivos Públicos</h1>
			<div className="file-list">
				{files.map((file, index) => (
					<Card
						key={index}
						title={file.title}
						description={`Descripción del archivo ${file.description}`}
						newUrl={`/public/${file.file}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Public;
