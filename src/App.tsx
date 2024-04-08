import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Home from './features/Home';
import AppLayout from './features/AppLayout';
import AboutUs from 'features/AboutUs';
import Product from 'features/Product';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: routes.home,
          element: <Home />,
        },
        {
          path: routes.aboutUs,
          element: <AboutUs />,
        },
        {
          path: routes.productLink,
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
