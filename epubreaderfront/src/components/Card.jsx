import React from "react";
import "./Card.css";
import useStore from "./store";
import { Link } from "react-router-dom";
const Card = ({ title, description, newUrl }) => {
	const setUrl = useStore((state) => state.setUrl);

	const handleClick = () => {
		setUrl(newUrl);
	};

	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{description}</p>
			<Link className="nav-link" to="/viewer">
				<button onClick={handleClick}>Cambiar URL</button>{" "}
			</Link>
		</div>
	);
};

export default Card;
