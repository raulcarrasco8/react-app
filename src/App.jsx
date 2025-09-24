
import './App.css'

import Footer from './components/Footer'
import NavBar from './components/Navbar'
import RecipesList from './components/RecipesList'
import SideBar from './components/Sidebar'


function App() {
  
  return (
    <div className = "pantalla">
      
      <NavBar />
      <SideBar />
      <RecipesList/>
      <Footer />
    
    </div>
  )
}

export default App
