//Sidebar.jsx

import "./Sidebar.css";
import useStore from "./store";
import { Link } from "react-router-dom";
import SignOutButton from "./signOutButton";
const Sidebar = () => {
	const isOpen = useStore((state) => state.isOpen);
	const toggleBar = useStore((state) => state.toggleIsOpen);
	return (
		<>
			<div className={`sidebar ${isOpen ? "open" : ""}`}>
				<nav>
					<img
						src="/assets/img/logo-small.png"
						width="50px"
						alt="Logo"
					/>
					<ul>
						<li>
							<Link className="nav-link" to="public">
								Public Files
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="private">
								My Files
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="viewer">
								Viewer
							</Link>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<SignOutButton></SignOutButton>
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

export default Sidebar;
