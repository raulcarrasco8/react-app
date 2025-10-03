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
import NewRecipe from "./pages/NewRecipe";
import ModifyRecipe from "./pages/ModifyRecipe";

function App() {
  const [recipeItemList, setRecipeItemList] = useState(recipes);

  const deleteRecipe = (recipeId) => {
    const newList = recipeItemList.filter((recipeItem) => recipeItem.id !== recipeId);
    setRecipeItemList(newList);
  };

  const createRecipe = (recipe) => {
    const copyOfRecipeList = [...recipeItemList];
    copyOfRecipeList.push(recipe);
    setRecipeItemList(copyOfRecipeList);
  };

  const updateRecipe = (recipe) => {
    const updatedList = recipeItemList.map((r) =>
      r.id === recipe.id ? recipe : r
    );
    setRecipeItemList(updatedList);
  };

  return (
    <div className="pantalla">
      <NavBar />
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <RecipesList
              recipeList={recipeItemList}
              onDelete={deleteRecipe}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewRecipe onCreate={createRecipe} />} />
        <Route
          path="/modify/:recipeId"
          element={
            <ModifyRecipe
              onModify={updateRecipe}
              recipeList={recipeItemList}
            />
          }
        />
        <Route
          path="/recipe/:recipeId"
          element={<ItemDetails recipeList={recipeItemList} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
