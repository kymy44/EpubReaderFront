import React, { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import "./Public.css";
import Card from "../Card";

const Public = () => {
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
		<>
			<div className="container">
				<div className="file-list">
					{files.map((file, index) => (
						<Card
							key={index}
							id={file.id}
							title={file.title}
							newUrl={file.file}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Public;
