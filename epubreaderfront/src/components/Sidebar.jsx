//Sidebar.jsx

import "./Sidebar.css";
import useStore from "./store";
import { Link } from "react-router-dom";
const SideBar = () => {
	const isOpen = useStore((state) => state.isOpen);
	const toggleBar = useStore((state) => state.toggleIsOpen);
	return (
		<>
			<div className={`sidebar ${isOpen ? "open" : ""}`}>
				<nav>
					<img src="/assets/img/logo-small.png" width="50px"></img>
					<ul>
						<li>
							<Link className="nav-link" to="/App">
								Inicio
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/viewer">
								Viewer
							</Link>
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
		</>
	);
};

export default SideBar;
