import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ Import toaster
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import ThankYou from './pages/ThankYou';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'thank-you', element: <ThankYou /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Toaster added */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
