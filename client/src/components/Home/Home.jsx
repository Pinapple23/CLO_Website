import './Home.css'; // Import your custom CSS

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MyStore</h1>
        <p>Your one-stop shop for handmade products.</p>
      </header>
      <section className="home-content">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">Product 1</div>
          <div className="product-item">Product 2</div>
          <div className="product-item">Product 3</div>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
