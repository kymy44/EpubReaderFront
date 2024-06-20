import React, { useState } from "react";
import axios from "../utils/axiosConfig";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
const UploadForm = () => {
	const auth = useAuthUser();
	const [file, setFile] = useState(null);
	const [title, setTitle] = useState("");
	const [isPublic, setIsPublic] = useState(false);
	const authHeader = useAuthHeader(); // Obtén el token de autorización

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleIsPublicChange = (event) => {
		setIsPublic(event.target.checked);
	};

	const handleUpload = (event) => {
		event.preventDefault();

		if (!file || !title) {
			alert("Por favor, completa todos los campos requeridos.");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);
		formData.append("title", title);
		formData.append("isPublic", isPublic);
		const axiosConfig = {
			headers: {
				Authorization: authHeader,
				"Content-Type": "multipart/form-data",
			},
		};

		axios
			.post("/files/", formData, axiosConfig)
			.then((response) => {
				console.log("Archivo subido con éxito", response);
				// Aquí puedes actualizar el estado de tu aplicación si es necesario
			})
			.catch((error) => {
				console.error("Error subiendo el archivo:", error);
			});
	};

	return (
		<div className="container">
			<form onSubmit={handleUpload}>
				<div>
					<label htmlFor="title">Título:</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={handleTitleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="file">Archivo:</label>
					<input
						type="file"
						id="file"
						onChange={handleFileChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="isPublic">Public</label>
					<input
						type="checkbox"
						id="isPublic"
						checked={isPublic}
						onChange={handleIsPublicChange}
					/>
				</div>
				<button type="submit">Subir Archivo</button>
			</form>
		</div>
	);
};

export default UploadForm;
