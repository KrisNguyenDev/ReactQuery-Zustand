import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './components/Login'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <RegisterLayout />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])
  return routeElement
}
