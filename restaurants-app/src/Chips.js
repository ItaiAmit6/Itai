import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Sushi' },
    { key: 1, label: 'Pizza' },
    { key: 2, label: 'Mexican' },
    { key: 3, label: 'Meat' },
    { key: 4, label: 'Dairy' },
    { key: 5, label: 'Salad' },
    { key: 6, label: 'Burger' },
    { key: 7, label: 'Street Food' },
    { key: 8, label: 'Kosher' },
    { key: 9, label: 'Vegan' },
    { key: 10, label: 'Vegeterian' },
    { key: 11, label: 'Dessert' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
      elevation={0}
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
