import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import Header from './components/header';
import Home from './components/home';

import { AuthProvider } from './contexts/authContext';
import { useRoutes } from 'react-router-dom';


function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
