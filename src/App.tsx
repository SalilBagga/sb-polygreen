import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Home from './features/Home';
import AppLayout from './features/AppLayout';

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
