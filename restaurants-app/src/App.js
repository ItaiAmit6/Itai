import React from 'react';
import Map from './Map';
import { Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';
import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import ChipsArray from './Chips';
import FoodTags from './FoodTags';
import AddRestaurantModal from './AddRestaurantModal' 
import Restaurant from './types/Restaurant'

const data = [
  {
    Id: 1,
    Name: "Taqueria",
    Address: 'Levontin Street 28, Tel Aviv',
    Tags: [FoodTags.Mexican.label, FoodTags.Meat.label, FoodTags.Vegeterian.label]
  },
  {
    Id: 2,
    Name: "Pasta via",
    Address: 'Shlomo Ibn Gabirol Street 142, Tel Aviv',
    Tags: [FoodTags.Italian.label, FoodTags.Dairy.label, FoodTags.Vegeterian.label]
  },
  {
    Id: 3,
    Name: "Gourmet 26",
    Address: 'Emanuel HaRomi Street 21, Tel Aviv',
    Tags: [FoodTags.Burger.label, FoodTags.Meat.label]
  },
  {
    Id: 4,
    Name: "Moon",
    Address: 'Shlomo Ibn Gabirol Street 142, Tel Aviv',
    Tags: [FoodTags.Sushi.label, FoodTags.Vegeterian.label, FoodTags.Fish.label]
  },
];

const searchableKeys = ["Name"];

export default function App() {
  const [results, setResults] = useState("");
  const [restaurants, setRestaurants] = useState(data);

  const filteredResults = restaurants.filter((item) =>
    searchableKeys.some((key) =>
      item[key].toLowerCase().includes(results.toLowerCase())
    )
  );

  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={2}
        >
        {/** Left Side Items */}
        <Grid container xs={4} direction="column" height="600px" justifyContent="space-between" margin="16px 0">
          <SearchBar
            value={results}
            onChange={(value) => setResults(value)}
            placeholder="Please enter a name..."
            onCancelSearch={() => setResults("")}
          />
          {/** Chips */}
          <ChipsArray />
          <Paper elevation={3}>
            {filteredResults.map((item) => (
              <li key={item.Id} style={{'listStyleType': 'none', 'padding': '6px 12px'}}>{item.Name}</li>
            ))}
          </Paper>
          <AddRestaurantModal restaurants={filteredResults} handleNewRestaurant={setRestaurants}/>
        </Grid>
        {/** Map */}
        <Grid item xs={8}>
          <Map/>
        </Grid>
      </Grid>
    </Container>
  );
}