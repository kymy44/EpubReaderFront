// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/app/*" element={<Layout />} />
			</Routes>
		</Router>
	);
};

export default App;
