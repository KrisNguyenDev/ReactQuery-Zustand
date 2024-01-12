import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import SiderBarLayout from './layouts/SiderBarLayout'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <SiderBarLayout />,
    },
    {
      path: '/register',
      element: <RegisterLayout />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])
  return routeElement
}
