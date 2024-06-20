//Card.jsx
import React from "react";
import "./Card.css";
import useStore from "./store.js";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton.jsx";
const Card = ({ title, id, newUrl }) => {
	const setUrl = useStore((state) => state.setUrl);
	const handleClick = () => {
		setUrl(newUrl); // La URL completa se construye en el store
	};

	return (
		<div className="card">
			<h2>{title}</h2>
			<Link className="nav-link" to="/viewer">
				<button onClick={handleClick}>Leer</button>
			</Link>
			{location.pathname === "/files" && <DeleteButton id={id} />}
		</div>
	);
};

export default Card;
