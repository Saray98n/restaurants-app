export default function Home({ restaurants }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">🍽️ Restaurantes Disponibles</h2>
      <div className="row">
        {restaurants.map(r => (
          <div className="col-md-4 mb-4" key={r.id}>
            <div className="card h-100 shadow-sm border-0">
              <img src={r.image} className="card-img-top rounded-top" alt={r.name} />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-gradient text-white" style={{ background: '#6f42c1' }}>{r.category}</span>
                  <span className="text-warning">
                    {Array.from({ length: Math.round(r.rating) }, (_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                    <span className="ms-1 text-dark">{r.rating}</span>
                  </span>
                </div>
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">{r.description}</p>
                <p className="text-muted mb-1">
                  <i className="bi bi-geo-alt-fill me-1"></i>{r.address}
                </p>
                <p className="text-muted">
                  <i className="bi bi-currency-dollar me-1"></i>{r.priceLevel}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
