import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Test from './pages/Test'
import SiderBar from './components/SiderBar'
import TnxDetails from './pages/TnxDetails'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <SiderBar />,
    },
    {
      path: '/register',
      element: <RegisterLayout />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/tnxDetails',
      element: <TnxDetails />,
    },
  ])
  return routeElement
}
