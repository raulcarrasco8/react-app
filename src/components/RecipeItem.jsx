import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

function Recipe(props) {
  return (
    <div key={props.recipeItem.id}>
      <h2>{props.recipeItem.name}</h2>
      <div className="receta">
        <img
          src={props.recipeItem.image}
          style={{ border: "1px solid red", maxWidth: "200px" }}
        ></img>
        <div>
          <p>Calories: {props.recipeItem.calories}</p>
          <p>Serving: {props.recipeItem.servings}</p>
        </div>
        {props.recipeItem.calories > 400 ? (
          <div>PRECAUCION COMIDA CALORICA</div>
        ) : (
          <div> COMIDA BAJA EN CALORIAS</div>
        )}
        <Link to={`/recipe/${props.recipeItem.id}`}>
          <Button
            variant="filled"
            color="orange"
            size="xl"
            radius="lg"
            style={{ height: "100%", marginRight: "5px" }}
          >
            More Details
          </Button>
        </Link>
        <div>
          <Button
            onClick={() => {
              props.onDelete(props.recipeItem.id);
            }}
            variant="light"
            color="red"
            size="xl"
            radius="lg"
            style={{ height: "100%" }}
          >
            Delete
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              // props.onModify(props.recipeItem.id);
            }}
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            style={{ height: "100%" }}
          >
            Modify
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Recipe;
