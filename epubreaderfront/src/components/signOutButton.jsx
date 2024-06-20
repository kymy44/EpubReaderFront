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

	return <a onClick={handleSignOut}>Sign Out</a>;
};

export default SignOutButton;
