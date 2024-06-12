//EpubRender.jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ePub from "epubjs";
import "./EpubRender.css";
const EpubViewer = ({ url }) => {
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

	const nextPage = () => {
		renditionRef.current.next();
	};

	const prevPage = () => {
		renditionRef.current.prev();
	};

	return (
		<>
			<div ref={viewerRef} style={{ width: "100%", height: "100%" }} />
			<div className="navigation-button prev" onClick={prevPage}>
				<span>{"<"}</span>
			</div>
			<div className="navigation-button next" onClick={nextPage}>
				<span>{">"}</span>
			</div>
		</>
	);
};

EpubViewer.propTypes = {
	url: PropTypes.string.isRequired,
};

export default EpubViewer;
