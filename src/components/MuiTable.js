import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "image", headerName: "Image" },
  { field: "drink", headerName: "Drink", width: 130 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "glass", headerName: "Glass", width: 130 },
  { field: "instructions", headerName: "Instructions", width: 700 },
  { field: "ingredients", headerName: "Ingridients", width: 300 },
];

const rows = [
  {
    id: 15997,
    image: "",
    drink: "GG",
    category: "Ordinary Drink",
    glass: "Collins Glass",
    instructions:
      "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    ingredients: "Galliano, Ginger ale, Ice",
  },
  {
    id: 17222,
    image: "",
    drink: "A1",
    category: "Cocktail",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    ingredients: "Gin, Grand Marnier, Lemon Juice, Grenadine",
  },
  {
    id: 13501,
    image: "",
    drink: "ABC",
    category: "Shot",
    glass: "Shot glass",
    instructions: "Layered in a shot glass.",
    ingredients: "Amaretto, Baileys irish cream, Cognac",
  },
  {
    id: 17203,
    image: "",
    drink: "Kir",
    category: "Ordinary Drink",
    glass: "Wine Glass",
    instructions:
      "Add the crème de cassis to the bottom of the glass, then top up with wine.",
    ingredients: "Creme de Cassis, Champagne",
  },
  {
    id: 14229,
    image: "",
    drink: "747",
    category: "Shot",
    glass: "Shot glass",
    instructions:
      "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    ingredients: "Kahlua, Baileys irish cream, Frangelico",
  },
  {
    id: 17225,
    image: "",
    drink: "Ace",
    category: "Cocktail",
    glass: "Martini Glass",
    instructions:
      "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
    ingredients: "Gin, Grenadine, Heavy cream, Milk, Egg White",
  },
  {
    id: 15288,
    image: "",
    drink: "252",
    category: "Shot",
    glass: "Shot glass",
    instructions:
      "Add both ingredients to shot glass, shoot, and get drunk quick",
    ingredients: "151 proof rum, Wild Turkey",
  },
  {
    id: 17837,
    image: "",
    drink: "Adam",
    category: "Ordinary Drink",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    ingredients: "Dark rum, Lemon juice, Grenadine",
  },
  {
    id: 13938,
    image: "",
    drink: "AT&T",
    category: "Ordinary Drink",
    glass: "Highball Glass",
    instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
    ingredients: "Absolut Vodka, Gin, Tonic water",
  },
  {
    id: 13332,
    image: "",
    drink: "B-53",
    category: "Shot",
    glass: "Collins Glass",
    instructions:
      "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
    ingredients: "Kahlua, Sambuca, Grand Marnier",
  },
  {
    id: 14610,
    image: "",
    drink: "ACID",
    category: "Shot",
    glass: "Shot glass",
    instructions:
      "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
    ingredients: "151 proof rum, Wild Turkey",
  },
  {
    id: 15853,
    image: "",
    drink: "B-52",
    category: "Shot",
    glass: "Shot glass",
    instructions: "Layer ingredients into a shot glass. Serve with a stirrer.",
    ingredients: "Baileys irish cream, Grand Marnier, Kahlua",
  },
  {
    id: 16262,
    image: "",
    drink: "H.D.",
    category: "Coffee / Tea",
    glass: "Beer mug",
    instructions:
      "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
    ingredients: "Whisky, Baileys irish cream, Coffee",
  },
  {
    id: 17141,
    image: "",
    drink: "Smut",
    category: "Punch / Party Drink",
    glass: "Beer mug",
    instructions: "Throw it all together and serve real cold.",
    ingredients: "Red wine, Peach schnapps, Pepsi Cola, Orange juice",
  },
  {
    id: 17208,
    image: "",
    drink: "Rose",
    category: "Ordinary Drink",
    glass: "Cocktail glass",
    instructions:
      "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
    ingredients:
      "Dry Vermouth, Gin, Apricot brandy, Lemon juice, Grenadine, Powdered sugar",
  },
  {
    id: 17833,
    image: "",
    drink: "A. J.",
    category: "Ordinary Drink",
    glass: "Cocktail glass",
    instructions:
      "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    ingredients: "Applejack, Grapefruit juice",
  },
  {
    id: 17187,
    image: "",
    drink: "Derby",
    category: "Ordinary Drink",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
    ingredients: "gin, Peach Bitters, Mint",
  },
  {
    id: 12764,
    image: "",
    drink: "Karsk",
    category: "Ordinary Drink",
    glass: "Highball glass",
    instructions:
      "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
    ingredients: "Coffee, Grain alcohol",
  },
  {
    id: 12776,
    image: "",
    drink: "Melya",
    category: "Coffee / Tea",
    glass: "Coffee mug",
    instructions:
      "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
    ingredients: "Espresso, Honey, Cocoa powder",
  },
  {
    id: 14598,
    image: "",
    drink: "50/50",
    category: "Ordinary Drink",
    glass: "Collins Glass",
    instructions:
      "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
    ingredients: "Vanilla vodka, Grand Marnier, Orange juice",
  },
  {
    id: 15328,
    image: "",
    drink: "Zorro",
    category: "Coffee / Tea",
    glass: "Coffee Mug",
    instructions: "add all and pour black coffee and add whipped cream on top.",
    ingredients: "Sambuca, Baileys irish cream, White Creme de Menthe",
  },
  {
    id: 17254,
    image: "",
    drink: "Bijou",
    category: "Cocktail",
    glass: "Cocktail glass",
    instructions: "Stir in mixing glass with ice and strain.",
    ingredients: "Orange Bitters, Green Chartreuse, Gin, Sweet Vermouth",
  },
  {
    id: 17839,
    image: "",
    drink: "Affair",
    category: "Ordinary Drink",
    glass: "Highball glass",
    instructions:
      "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
    ingredients:
      "Strawberry schnapps, Orange juice, Gin, Cranberry juice, Club soda",
  },
  {
    id: 11149,
    image: "",
    drink: "Boxcar",
    category: "Ordinary Drink",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
    ingredients: "Gin, Triple sec, Grenadine, Lemon juice, Egg white",
  },
  {
    id: 11872,
    image: "",
    drink: "Orgasm",
    category: "Ordinary Drink",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
    ingredients: "Creme de Cacao, Amaretto, Triple sec, Vodka, Light cream",
  },
];

export default function MuiTable() {
  return (
    <div style={{ height: 632, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
