import React, { useEffect, useRef } from "react";
import ePub from "epubjs";

const EpubViewer = ({ url }) => {
	const viewerRef = useRef(null);
	const bookRef = useRef(null);
	const renditionRef = useRef(null);

	useEffect(() => {
		bookRef.current = ePub(url);
		renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
			width: "100%",
			height: "100%",
		});

		renditionRef.current.display();

		return () => {
			renditionRef.current.destroy();
		};
	}, [url]);

	const nextPage = () => {
		renditionRef.current.next();
	};

	const prevPage = () => {
		renditionRef.current.prev();
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

export default EpubViewer;
