import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		// Aquí puedes agregar la lógica de autenticación
		navigate("/main");
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<input type="text" placeholder="Username" required />
				<input type="password" placeholder="Password" required />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
