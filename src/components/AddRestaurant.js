import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRestaurant({ onAdd }) {
  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    image: '',
    category: '',
    rating: '',
    priceLevel: ''
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(restaurant); 
    navigate('/'); 
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h2 className="mb-4 text-center">
          <i className="bi bi-plus-circle-fill me-2 text-primary"></i>
          Nuevo Restaurante
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input name="name" onChange={handleChange} className="form-control" placeholder="Ej: Sushi World" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea name="description" onChange={handleChange} className="form-control" placeholder="Breve descripción" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input name="address" onChange={handleChange} className="form-control" placeholder="Calle, ciudad..." required />
          </div>

          <div className="mb-3">
            <label className="form-label">URL de Imagen</label>
            <input name="image" onChange={handleChange} className="form-control" placeholder="https://..." required />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select name="category" className="form-select" onChange={handleChange} required>
              <option value="">Selecciona una</option>
              <option value="Comida Rápida">Comida Rápida</option>
              <option value="Italiana">Italiana</option>
              <option value="Japonesa">Japonesa</option>
              <option value="Típica">Típica</option>
              <option value="Vegana">Vegana</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Calificación (0-5)</label>
            <input type="number" min="0" max="5" step="0.1" name="rating" onChange={handleChange} className="form-control" placeholder="4.5" required />
          </div>

          <div className="mb-4">
            <label className="form-label">Nivel de Precio ($, $$, $$$)</label>
            <select name="priceLevel" className="form-select" onChange={handleChange} required>
              <option value="">Selecciona una opción</option>
              <option value="$">$ (Económico)</option>
              <option value="$$">$$ (Moderado)</option>
              <option value="$$$">$$$ (Exclusivo)</option>
            </select>
          </div>

          <button className="btn btn-gradient w-100" type="submit">
            <i className="bi bi-check-circle-fill me-2"></i> Crear Restaurante
          </button>
        </form>
      </div>
    </div>
  );
}
