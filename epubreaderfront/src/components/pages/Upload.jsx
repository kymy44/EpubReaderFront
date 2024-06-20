import React, { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import Card from "../Card";

const Upload = () => {
	const [files, setFiles] = useState([]);
	const authHeader = useAuthHeader(); // preparamos los headers con el token de autenticación
	console.log(authHeader);
	useEffect(() => {
		const axiosConfig = {
			headers: { Authorization: authHeader },
		};
		axios
			.get("/public", axiosConfig)
			.then((response) => {
				setFiles(response.data);
			})
			.catch((error) => {
				console.error("Error fetching files:", error);
			});
	}, [authHeader]);

	return (
		<div>
			<h1>Lista de Archivos Públicos</h1>
			<div className="file-list">
				{files.map((file, index) => (
					<Card key={index} title={file.title} newUrl={file.file} />
				))}
			</div>
		</div>
	);
};

export default Upload;
