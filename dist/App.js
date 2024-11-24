import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
    return (_jsx(Router, { children: _jsx("div", { className: "min-h-screen bg-gradient-to-br from-brand-primary to-brand-light text-white", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "*", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/submit", element: _jsx(Submit, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) })] })] }) })] }) }) }));
}
export default App;
