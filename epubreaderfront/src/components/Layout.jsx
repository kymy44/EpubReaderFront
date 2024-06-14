// Layout.js
import Sidebar from "./Sidebar";
import Viewer from "./pages/Viewer";
import useStore from "./store";
import "./Layout.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Layout = () => {
	const isOpen = useStore((state) => state.isOpen);

	return (
		<div className="app-container">
			<Sidebar />
			<div className={`main-content ${isOpen ? "shifted" : ""}`}>
				<Routes>
					<Route path="/" element={<Viewer />} />
				</Routes>
			</div>
		</div>
	);
};

export default Layout;
