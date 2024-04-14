import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Home from './features/Home';
import AppLayout from './features/AppLayout';
import AboutUs from 'features/AboutUs';
import Product from 'features/Product';
import Gallery from 'features/Gallery';

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
        {
          path: routes.gallery,
          element: <Gallery />,
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
