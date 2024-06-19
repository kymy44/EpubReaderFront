import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
import refresh from "./components/utils/refresh.js";
import Viewer from "./components/pages/Viewer.jsx";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Public from "./components/pages/Public.jsx";

const authStore = createStore({
	authName: "_auth",
	authType: "cookie",
	cookieDomain: window.location.hostname,
	cookieSecure: false, //window.location.protocol === "http:",
	refresh: refresh,
});

const App = () => {
	return (
		<AuthProvider store={authStore}>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route element={<AuthOutlet fallbackPath="/login" />}>
						<Route element={<Layout />}>
							<Route path="/viewer" element={<Viewer />} />
							<Route path="/public" element={<Public />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
