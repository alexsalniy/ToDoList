import { Grid, Button, ButtonGroup} from '@material-ui/core/';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export function Pagination({ pagesCount, setPage, page }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pageNumbers.push(i);
      }
      
    const paginate = pageNumber => setPage(pageNumber);

    return (
        <Grid container spacing={4} justify="center" style={{padding: 10}}>
            <Button variant="contained"
                color={'default'}
                onClick={() => setPage(1)}>
                <NavigateBeforeIcon />
                <NavigateBeforeIcon />
            </Button>
            <ButtonGroup>
                {pageNumbers.map(number => (
                    <Button key={number}
                    color={(number === page) ? 'primary' : 'default'}
                    variant={(number === page) ? 'contained' : 'outlined'}
                    onClick={() => paginate(number)}
                    >{number}</Button>
                ))}
            </ButtonGroup>
            <Button variant="contained"
                color={'default'}
                onClick={() => setPage(pagesCount)}>
                <NavigateNextIcon  />
                <NavigateNextIcon  />
            </Button>
        </Grid>
    )
};