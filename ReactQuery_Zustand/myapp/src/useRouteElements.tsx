import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import SiderBarLayout from './layouts/SiderBarLayout'
import Test from './pages/Test'

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
    {
      path: '/test',
      element: <Test />,
    },
  ])
  return routeElement
}
