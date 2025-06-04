import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import AddRestaurant from './components/AddRestaurant';
import './App.css';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'restaurants'));
        const firebaseRestaurants = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRestaurants(firebaseRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants(prev => [...prev, newRestaurant]);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-custom px-4 py-3 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/">
            <i className="bi bi-shop-window me-2"></i>Restaurants App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  <i className="bi bi-house-door me-1"></i>Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/search">
                  <i className="bi bi-search me-1"></i>Buscar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add">
                  <i className="bi bi-plus-circle me-1"></i>Nuevo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home restaurants={restaurants} />} />
          <Route path="/search" element={<Search restaurants={restaurants} />} />
          <Route path="/add" element={<AddRestaurant onAdd={handleAddRestaurant} />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>🍽️ Desarrollado por Sara Angulo García - IU Digital de Antioquia</p>
      </footer>
    </Router>
  );
}

export default App;
