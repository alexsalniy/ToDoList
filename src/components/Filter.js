import { Grid, Button, ButtonGroup} from '@material-ui/core/';
import { useState } from 'react';

export function Filter({ handleChange, dateSortButton, doneButton, setDoneButton, setDateSortButton }) {

    const [dateSorter, setDateSorter] = useState(1);
    const [checkSorter, setCheckSorter] = useState(1);
    

    const handleSortLater = () => {
        if(dateSorter !== 1) {
          setDateSorter(1);
          setDateSortButton(1);
          handleChange()
        }
    }
    
    const handleSortEarlier = () => {
        if(dateSorter !== 2) {
          setDateSorter(2);
          setDateSortButton(2);
          handleChange()
        }
    }

    const handleAll = () => {
      if(checkSorter !== 1) {
        setCheckSorter(1);
        setDoneButton(1);
        handleChange()
      }
    }
  
    const handleDone = () => {
      if(checkSorter !== 2) {
        setCheckSorter(2);
        setDoneButton(2);
        handleChange()
      }
    }
  
    const handleUndone = () => {
      if(checkSorter !== 3) {
        setCheckSorter(3);
        setDoneButton(3);
        handleChange()
      }
    }
    
    return (
        <Grid container spacing={4} justify="space-around" >
          <Grid item
            onChange={handleChange}>
            <ButtonGroup>
              <Button onClick={handleAll}
              color={(doneButton === 1) ? 'primary' : 'default'}
              variant={(doneButton === 1) ? 'contained' : 'outlined'}
              >All</Button>
              <Button onClick={handleDone}
              color={(doneButton === 2) ? 'primary' : 'default'}
              variant={(doneButton === 2) ? 'contained' : 'outlined'}
              >Done</Button>
              <Button onClick={handleUndone}
              color={(doneButton === 3) ? 'primary' : 'default'}
              variant={(doneButton === 3) ? 'contained' : 'outlined'}
              >Undone</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button onClick={handleSortLater}
              color={(dateSortButton === 1) ? 'primary' : 'default'}
              variant={(dateSortButton === 1) ? 'contained' : 'outlined'}
              >Later</Button>
              <Button onClick={handleSortEarlier}
              color={(dateSortButton === 2) ? 'primary' : 'default'}
              variant={(dateSortButton === 2) ? 'contained' : 'outlined'}
              >Earlier</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
    )
}
