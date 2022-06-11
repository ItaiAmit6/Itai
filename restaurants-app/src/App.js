import React from 'react';
import Map from './Map';
import { Grid, Button } from '@mui/material';
import {Container } from '@mui/system';
import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import ChipsArray from './Chips'
import FoodTags from './FoodTags'

const data = [
  {
    id: 1,
    name: "Taqueria",
    address: 'Levontin Street 28, Tel Aviv',
    tags: [FoodTags.Mexican, FoodTags.Meat, FoodTags.Vegeterian]
  },
  {
    id: 2,
    name: "Pasta via",
    address: 'Shlomo Ibn Gabirol Street 142, Tel Aviv',
    tags: [FoodTags.Italian, FoodTags.Dairy, FoodTags.Vegeterian]
  },
];

const searchableKeys = ["name"];

export default function App() {
  const [results, setResults] = useState("");

  const filteredResults = data.filter((item) =>
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
        <Grid container xs={4} direction="column" height="600px" justifyContent="space-between">
          <SearchBar
            value={results}
            onChange={(value) => setResults(value)}
            placeholder="Please enter a name..."
            onCancelSearch={() => setResults("")}
          />
          {/** Chips */}
          <ChipsArray />
          <ul>
            {filteredResults.map((item) => (
              <li key={item.id} style={{'list-style-type': 'none'}}>{item.name}</li>
            ))}
          </ul>
          <Button variant="contained" fullWidth='true'>Add Restaurant</Button>
        </Grid>
        {/** Map */}
        <Grid item xs={8}>
          <Map/>
        </Grid>
      </Grid>
    </Container>
  );
}