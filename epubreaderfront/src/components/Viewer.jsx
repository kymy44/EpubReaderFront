//Viewer.jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ePub from "epubjs";
import "./Viewer.css";
import useStore from "./store";

const Viewer = () => {
	const url = useStore((state) => state.url);
	const viewerRef = useRef(null);
	const bookRef = useRef(null);
	const renditionRef = useRef(null);
	useEffect(() => {
		bookRef.current = ePub(url);
		renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
			flow: "paginated",
			width: "95vw",
		});

		renditionRef.current.display();
		return () => {
			//limpieza del renderizado del libro anterior
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
			<div ref={viewerRef} />
			<div className="navigation-button prev" onClick={prevPage}>
				<span>{"<"}</span>
			</div>
			<div className="navigation-button next" onClick={nextPage}>
				<span>{">"}</span>
			</div>
		</>
	);
};
export default Viewer;
