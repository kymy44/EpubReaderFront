import React, { useState } from "react";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [error, setError] = useState("");
	const signIn = useSignIn();
	const [formData, setFormData] = useState({ username: "", password: "" });
	const navigate = useNavigate();
	const onSubmit = async (event) => {
		event.preventDefault();
		setError("");

		try {
			const response = await axios.post(
				"http://localhost:8000/api/token/",
				formData
			);

			console.log("API Response:", response.data);

			if (response.data) {
				console.log("hay response.data.access", response.data);
				if (
					signIn({
						auth: {
							token: response.data.access,
							type: "Bearer",
						},
						refresh: response.data.refresh,
					})
				) {
					navigate("/viewer");
				} else {
					setError("Token no encontrado en la respuesta.");
				}
			}
		} catch (err) {
			if (err && err instanceof AxiosError) {
				setError(err.response?.data.message);
			} else if (err && err instanceof Error) {
				setError(err.message);
			}

			console.log("Error: ", err);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Username"
				value={formData.username}
				onChange={(e) =>
					setFormData({ ...formData, username: e.target.value })
				}
			/>
			<input
				type="password"
				placeholder="Password"
				value={formData.password}
				onChange={(e) =>
					setFormData({ ...formData, password: e.target.value })
				}
			/>
			<button type="submit">Submit</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default Login;
