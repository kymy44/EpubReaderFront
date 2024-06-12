//EpubRender.jsx
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ePub from "epubjs";
import "./Test.css";
const Test = ({ url }) => {
	const viewerRef = useRef(null);
	const bookRef = useRef(null);
	const renditionRef = useRef(null);
	useEffect(() => {
		bookRef.current = ePub(url);
		renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
			method: "continuous",
			width: "100%",
			height: "100%",
		});

		renditionRef.current.display();
		return () => {
			//limpieza del renderizado del libro anterior
			console.log("libro destruido");
			renditionRef.current.destroy();
		};
	}, [url]); //suscripcion a cambios en la url
	const [isOpen, setIsOpen] = useState(false);

	const toggleBar = () => {
		setIsOpen(!isOpen);
	};
	const nextPage = () => {
		renditionRef.current.next();
	};

	const prevPage = () => {
		renditionRef.current.prev();
	};
	return (
		<>
			<div className={`sidebar ${isOpen ? "open" : ""}`}>
				<nav>
					<img
						src="../../public/assets/img/logo.png"
						width="50px"
					></img>
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

			<button
				className={`toggle-bar-button ${isOpen ? "shifted" : ""}`}
				onClick={toggleBar}
			>
				☰
			</button>

			<div
				className={`main-content ${isOpen ? "shifted" : ""}`}
				ref={viewerRef}
				style={{
					width: "100%",
					height: "100%",
				}}
			/>

			{!isOpen && (
				<>
					<div className="navigation-button prev" onClick={prevPage}>
						<span>{"<"}</span>
					</div>
					<div className="navigation-button next" onClick={nextPage}>
						<span>{">"}</span>
					</div>
				</>
			)}
		</>
	);
};

Test.propTypes = {
	url: PropTypes.string.isRequired,
};

export default Test;
