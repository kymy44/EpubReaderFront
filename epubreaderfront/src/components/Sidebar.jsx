//EpubSidebar.jsx

import "./Sidebar.css";
import useStore from "./store";
const SideBar = () => {
	const isOpen = useStore((state) => state.isOpen);
	const toggleBar = useStore((state) => state.toggleIsOpen);
	return (
		<>
			<div className={`sidebar ${isOpen ? "open" : ""}`}>
				<nav>
					<img src="/assets/img/logo.png" width="50px"></img>
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
		</>
	);
};

export default SideBar;
