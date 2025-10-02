import { useForm, isNotEmpty, hasLength } from "@mantine/form";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

function RecipeForm(props) {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      calories: "",
      recipeimage: "",
      servings: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      calories: isNotEmpty("Enter your current calories"),
    },
  });
  const handleSubmit = (values) => {
    // Crear un nuevo objeto receta con id único
    const newRecipe = {
      id: Date.now(), // o algún otro método de generar ID único
      name: values.name,
      calories: values.calories,
      recipeimage: values.recipeimage,
      servings: values.servings,
    };
    props.onCreate(newRecipe);
    form.reset();
    navigate("/");
  };
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Recipe Name"
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />

        <NumberInput
          label="Recipe calories"
          placeholder="Recipe calories"
          withAsterisk
          mt="md"
          key={form.key("calories")}
          {...form.getInputProps("calories")}
        />

        <TextInput
          label="Your recipeimage"
          placeholder="Your recipe image"
          mt="md"
          key={form.key("recipeimage")}
          {...form.getInputProps("recipeimage")}
        />

        <TextInput
          label="How many servings?"
          placeholder="Number of servings"
          mt="md"
          key={form.key("servings")}
          {...form.getInputProps("servings")}
        />

        <Group justify="center" mt="md" spacing="md">
          <Button color="lightgreen " type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Group>
      </form>
    </>
  );
}

export default RecipeForm;
