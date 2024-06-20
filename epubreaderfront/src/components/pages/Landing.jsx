//Landing.jsx
import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
	return (
		<>
			<div className="landing-container">
				<div className="landing-logo">
					<img src="/assets/img/logo-big.png" alt="Large Logo" />
				</div>

				<div className="invitation-request">
					<h2>Necesitas una invitación para acceder!</h2>
					<div className="buttons">
						<button className="request-btn">
							Solicitar invitación!
						</button>
						<Link className="nav-link" to="/login">
							<button className="already-btn">
								Ya tengo una cuenta
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default Landing;
