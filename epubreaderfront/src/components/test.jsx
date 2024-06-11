import  { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ePub from "epubjs";

const EpubViewer = ({ url }) => {
	const viewerRef = useRef(null);
	const bookRef = useRef(null);
	const renditionRef = useRef(null);

	useEffect(() => {
		const loadBook = async () => {
			try {
				// Cargar el libro
				bookRef.current = ePub(url);
				renditionRef.current = bookRef.current.renderTo(
					viewerRef.current,
					{
						width: "100%",
						height: "100%",
					}
				);

				// Esperar a que el libro esté listo antes de mostrar
				await bookRef.current.ready;

				renditionRef.current.display();
			} catch (error) {
				console.error("Error al cargar el libro ePub:", error);
			}
		};

		loadBook();

		return () => {
			console.log("libro destruido");
			if (renditionRef.current) {
				renditionRef.current.destroy();
			}
		};
	}, [url]);

	const nextPage = () => {
		if (renditionRef.current) {
			renditionRef.current.next();
		}
	};

	const prevPage = () => {
		if (renditionRef.current) {
			renditionRef.current.prev();
		}
	};

	return (
		<div>
			<div ref={viewerRef} style={{ width: "100%", height: "80vh" }} />
			<div>
				<button onClick={prevPage}>Previous</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</div>
	);
};

EpubViewer.propTypes = {
	url: PropTypes.string.isRequired,
};

export default EpubViewer;
