//signOutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
const SignOutButton = () => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut();
		navigate("/login");
	};

	return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
