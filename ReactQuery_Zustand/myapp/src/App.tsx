import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useProfile } from './hooks'

function App() {
  const { data } = useProfile()
  console.log(data)
  return (
    <>
      <p>{data?.data.name}</p>
      <p>{data?.data.email}</p>
      <ToastContainer />
    </>
  )
}

export default App
