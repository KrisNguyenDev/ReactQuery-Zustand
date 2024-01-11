import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElement = useRouteElements()
  // const { data } = useProfile()
  // console.log(data)
  return (
    <>
      {routeElement}
      <ToastContainer />
    </>
  )
}

export default App
