import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import RecipesList from "./components/RecipesList";
import SideBar from "./components/Sidebar";
import recipes from "./assets/recipes.json";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";

function App() {
  
  const [recipeItemList, setRecipeItemList] = useState(recipes);

  const deleteRecipe = (recipeId) => {
    const newList = recipeItemList.filter((recipeItem, i, arr) => {
      return recipeItem.id !== recipeId;
    });

    setRecipeItemList(newList);
  };

  return (
    <div className="pantalla">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element= {<RecipesList recipeList={recipeItemList}
        onDelete={deleteRecipe}/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/recipe/:recipeId" element= {<ItemDetails recipeList={recipeItemList}/>}/>
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
