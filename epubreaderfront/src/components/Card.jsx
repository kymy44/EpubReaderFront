//Card.jsx
import React from "react";
import "./Card.css";
import useStore from "./store";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
const Card = ({ title, id, newUrl }) => {
	const setUrl = useStore((state) => state.setUrl);
	const handleClick = () => {
		setUrl(newUrl); // La URL completa se construye en el store
		console.log("el id es ", id);
	};

	return (
		<div className="card">
			<h2>{title}</h2>
			<Link className="nav-link" to="/viewer">
				<button onClick={handleClick}>Cambiar URL</button>
			</Link>
			{location.pathname === "/files" && <DeleteButton id={id} />}
		</div>
	);
};

export default Card;
