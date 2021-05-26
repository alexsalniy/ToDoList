import { Grid, Button, ButtonGroup} from '@material-ui/core/';

export function Filter({ setCurrentPage, sortByDate, sortByDone, setSortByDone, setSortByDate }) {

    const handleChange = () => {
      setCurrentPage(1);
    };

    const handleSortLater = () => {
        if(sortByDate !== 'later') {
          setSortByDate('later');
        };
    };
    
    const handleSortEarlier = () => {
        if(sortByDate !== 'earlier') {
          setSortByDate('earlier');
        };
    };

    const handleAll = () => {
      if(sortByDone !== 'all') {
        setSortByDone('all');
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
              color={(sortByDone === 'all') ? 'primary' : 'default'}
              variant={(sortByDone === 'all') ? 'contained' : 'outlined'}
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
          <Grid item onClick={handleChange}>
            <ButtonGroup>
              <Button onClick={handleSortLater}
              color={(sortByDate === 'later') ? 'primary' : 'default'}
              variant={(sortByDate === 'later') ? 'contained' : 'outlined'}
              >Later</Button>
              <Button onClick={handleSortEarlier}
              color={(sortByDate === 'earlier') ? 'primary' : 'default'}
              variant={(sortByDate === 'earlier') ? 'contained' : 'outlined'}
              >Earlier</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
    )
};
