// Layout.js
import Sidebar from "./Sidebar.jsx";
import Viewer from "./pages/Viewer.jsx";
import useStore from "./store.js";
import "./Layout.css";
//import Landing from "./pages/Landing";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
const Layout = () => {
	const isOpen = useStore((state) => state.isOpen);

	return (
		<div className="app-container">
			<Sidebar />
			<div className={`main-content ${isOpen ? "shifted" : ""}`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
