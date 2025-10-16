import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemListManagerComponent from "./components/ItemListManager.component.jsx";
import HomeComponent from "./components/Home.component.jsx";
function App() {
  return (
    <Router>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/itemListManager"}>Item List Manager</Link>
        </nav>
        <Routes>
            <Route path={"/"} element={<HomeComponent />} />
            <Route path={"/itemListManager"} element={<ItemListManagerComponent />} />
        </Routes>
    </Router>
  )
}

export default App
