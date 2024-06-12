//EpubSidebar.jsx
import { useState } from "react";
import "./EpubSidebar.css";
import EpubRender from "./EpubRender";
const EpubSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="app-container">
			<div className={`sidebar ${isOpen ? "open" : ""}`}>
				<nav>
					<button
						className="close-bar-button"
						onClick={toggleBar}
					></button>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			{!isOpen && (
				<button className="open-bar-button" onClick={toggleBar}>
					☰
				</button>
			)}

			<div className={`main-content ${isOpen ? "shifted" : ""}`}>
				<div className="content">
					<EpubRender url="http://127.0.0.1:8000/media/files/b4cfb987-2716-4e0c-84b3-535895b77c49.epub" />
				</div>
			</div>
		</div>
	);
};

export default EpubSideBar;
