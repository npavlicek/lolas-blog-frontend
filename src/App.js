import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/LoginForm';
import Secret from './components/Secret';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/secret" element={<Secret />} />
			</Routes>
		</Router>
	);
}

export default App;
