import Navbar from "./components/layout/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"
import User from "./pages/User"

function App() {

  window.onclick = event => {
    console.log(event.target)
  }
    
  return (
    <GithubProvider>
      <BrowserRouter>
        <AlertProvider>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container pb-12 px-3 mx-auto"> 
              <Alert /> 
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/user/:login" element={<User/>} />
                <Route path="/notfound" element={<NotFound/>} />
                <Route path="/*" element={<NotFound/>} />
              </Routes>
            </main>      
            <Footer />
          </div>   
        </AlertProvider>
      </BrowserRouter>   
    </GithubProvider>
  )
}

export default App