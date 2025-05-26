import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CouponManagementPage from './CouponManagementPage'; // We will create this next

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coupon Management System</h1>
      </header>
      <main className="container mt-4">
        <CouponManagementPage />
      </main>
      <footer className="text-center mt-5 mb-3">
        <p>&copy; {new Date().getFullYear()} Coupon App</p>
      </footer>
    </div>
  );
}

export default App;
