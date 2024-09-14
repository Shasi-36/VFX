
import './App.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import {routes} from "./Routes/routes"
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
  
     <Router>
 <Navbar/>
    
          <Routes>
            {routes &&
              routes.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={item.component}/>
                );
              })},
             
          </Routes>
        </Router> 
    

    </>
  )
}

export default App
