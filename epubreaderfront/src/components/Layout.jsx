// Layout.js
import Sidebar from "./Sidebar";
import Viewer from "./pages/Viewer";
import useStore from "./store";
import "./Layout.css";
const Layout = () => {
	const isOpen = useStore((state) => state.isOpen);

	return (
		<div className="app-container">
			<Sidebar />
			<div className={`main-content ${isOpen ? "shifted" : ""}`}>
				<Viewer />
			</div>
		</div>
	);
};

export default Layout;
