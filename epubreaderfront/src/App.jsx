import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing.jsx";
import Login from "./components/pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
import refresh from "./components/utils/refresh.js";
import Viewer from "./components/pages/Viewer.jsx";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Public from "./components/pages/Public.jsx";
import Private from "./components/pages/Private.jsx";
import UploadForm from "./components/pages/UploadForm.jsx";

const authStore = createStore({
	authName: "_auth",
	authType: "cookie",
	cookieDomain: window.location.hostname,
	cookieSecure: window.location.protocol === "https:",
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
							<Route path="/files" element={<Private />} />
							<Route path="/upload" element={<UploadForm />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
