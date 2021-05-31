import { Grid, Button, ButtonGroup} from '@material-ui/core/';

export function Filter({ setCurrentPage, sortByDate, sortByDone, setSortByDone, setSortByDate }) {

    const handleChange = () => {
      setCurrentPage(1);
    };

    const handleSortLater = () => {
        if(sortByDate !== 'desc') {
          setSortByDate('desc');
        };
    };
    
    const handleSortEarlier = () => {
        if(sortByDate !== 'asc') {
          setSortByDate('asc');
        };
    };

    const handleAll = () => {
      if(sortByDone !== '') {
        setSortByDone('');
      };
    };
  
    const handleDone = () => {
      if(sortByDone !== 'done') {
        setSortByDone('done');
      };
    };
  
    const handleUndone = () => {
      if(sortByDone !== 'undone') {
        setSortByDone('undone');
      };
    };
    
    return (
        <Grid container spacing={4} justify="space-between"  >
          <Grid item onClick={handleChange}>
            <ButtonGroup >
              <Button onClick={handleAll}
              color={(sortByDone === '') ? 'primary' : 'default'}
              variant={(sortByDone === '') ? 'contained' : 'outlined'}
              >All</Button>
              <Button onClick={handleDone}
              color={(sortByDone === 'done') ? 'primary' : 'default'}
              variant={(sortByDone === 'done') ? 'contained' : 'outlined'}
              >Done</Button>
              <Button onClick={handleUndone}
              color={(sortByDone === 'undone') ? 'primary' : 'default'}
              variant={(sortByDone === 'undone') ? 'contained' : 'outlined'}
              >Undone</Button>
            </ButtonGroup>
          </Grid>
          <Grid item >
            <ButtonGroup>
              <Button onClick={handleSortLater}
              color={(sortByDate === 'desc') ? 'primary' : 'default'}
              variant={(sortByDate === 'desc') ? 'contained' : 'outlined'}
              >Later</Button>
              <Button onClick={handleSortEarlier}
              color={(sortByDate === 'asc') ? 'primary' : 'default'}
              variant={(sortByDate === 'asc') ? 'contained' : 'outlined'}
              >Earlier</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
    )
};