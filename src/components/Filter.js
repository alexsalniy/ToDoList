import { Grid, Button, ButtonGroup} from '@material-ui/core/';
import { useState } from 'react';

export function Filter({ dateSortButton, doneButton, setDoneButton, setDateSortButton }) {

    const [dateSorter, setDateSorter] = useState(1);
    const [checkSorter, setCheckSorter] = useState(1);
    

    const handleSortLater = () => {
        if(dateSorter !== 1) {
          setDateSorter(1);
          setDateSortButton(1);
        }
    }
    
    const handleSortEarlier = () => {
        if(dateSorter !== 2) {
          setDateSorter(2);
          setDateSortButton(2);
        }
    }

    const handleAll = () => {
      if(checkSorter !== 1) {
        setCheckSorter(1);
        setDoneButton(1);
      }
    }
  
    const handleDone = () => {
      if(checkSorter !== 2) {
        setCheckSorter(2);
        setDoneButton(2);
      }
    }
  
    const handleUndone = () => {
      if(checkSorter !== 3) {
        setCheckSorter(3);
        setDoneButton(3);
      }
    }
    
    return (
        <Grid container spacing={4} justify="space-around" >
          <Grid item >
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
