import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Headers from "./components/Header"
import FetchItems from "./components/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "./components/LoadingSpinner"
function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
      <Headers/>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <Footer/>
    </>
  )
}

export default App
