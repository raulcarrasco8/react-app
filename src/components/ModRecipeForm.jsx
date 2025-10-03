import { useForm, isNotEmpty, hasLength } from "@mantine/form";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

function ModRecipeForm({ recipe, onModify }) {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: recipe?.name || "",
      calories: recipe?.calories || "",
      recipeimage: recipe?.image || "",
      servings: recipe?.servings || "",
    },
    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-10 characters long"),
      calories: isNotEmpty("Enter your current calories"),
    },
  });

  const handleSubmit = (values) => {
    const updatedRecipe = {
      id: recipe.id,
      name: values.name,
      calories: values.calories,
      image: values.recipeimage,
      servings: values.servings,
    };
    onModify(updatedRecipe);
    navigate("/");
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="Name" withAsterisk key={form.key("name")} {...form.getInputProps("name")} />
      <NumberInput label="Recipe calories" withAsterisk mt="md" key={form.key("calories")} {...form.getInputProps("calories")} />
      <TextInput label="Your recipe image" mt="md" key={form.key("recipeimage")} {...form.getInputProps("recipeimage")} />
      <TextInput label="How many servings?" mt="md" key={form.key("servings")} {...form.getInputProps("servings")} />

      <Group justify="center" mt="md" spacing="md">
        <Button color="lightgreen" type="submit">Save changes</Button>
        <Link to="/"><Button>Back</Button></Link>
      </Group>
    </form>
  );
}

export default ModRecipeForm;
