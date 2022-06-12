import * as React from 'react';
import { Grid, TextField, Modal, Button, Box } from '@mui/material';
import ChipsArray from './Chips';
import FoodTags from './FoodTags';
import { FC } from 'react';
import Restaurant from './types/Restaurant'

interface AddRestaurantModalProps { 
    restaurants: Restaurant[],
    handleNewRestaurant(e): void 
  }

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };

const AddRestaurantModal: FC<AddRestaurantModalProps> = ({
  restaurants, handleNewRestaurant
} : AddRestaurantModalProps) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNameChange = (e: any) => setName(e.target.value);
  const handleAddressChange = (e: any) => setAddress(e.target.value);
  function handleAdd() {
    const newList = restaurants.concat({ 
      Id: Math.max.apply(null, restaurants.map(item => item.Id)) + 1, 
      Name: name, 
      Address: address, 
      Tags: [] });

    handleNewRestaurant(newList);
  }

  return (
    <div>
      <Button variant="contained" fullWidth onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField id="outlined-start-adornment" label="Restaurant Name" variant="outlined" fullWidth onChange={handleNameChange}/>
            <br /><br />
            <TextField id="outlined-start-adornment" label="Address" variant="outlined" fullWidth onChange={handleAddressChange}/>
            <br /><br />
            <ChipsArray />
            <Grid container spacing={2} marginTop="1px">
                <Grid item xs={6}>
                    <Button variant="text" disableElevation fullWidth onClick={handleClose} >
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success" disableElevation fullWidth onClick={handleAdd}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default AddRestaurantModal;
