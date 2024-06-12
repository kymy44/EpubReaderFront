// App.js
import EpubRender from "./components/EpubRender.jsx";
import Test from "./components/test.jsx";
const App = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Test url="http://127.0.0.1:8000/media/files/b4cfb987-2716-4e0c-84b3-535895b77c49.epub" />
		</div>
	);
};

export default App;
