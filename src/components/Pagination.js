import { Grid, Button, ButtonGroup} from '@material-ui/core/';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export function Pagination({ setCurrentPage, todosPerPage, totalTodos, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
      }
      
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Grid container spacing={4} justify="space-between" style={{padding: 10}}>
            <Button variant="contained"
                color={'primary'}
                onClick={() => setCurrentPage(1)}>
                <NavigateBeforeIcon />
                <NavigateBeforeIcon />
            </Button>
            <ButtonGroup>
                {pageNumbers.map(number => (
                    <Button key={number}
                    color={(number === currentPage) ? 'primary' : 'default'}
                    variant={(number === currentPage) ? 'contained' : 'outlined'}
                    onClick={() => paginate(number)}
                    >{number}</Button>
                ))}
                
            </ButtonGroup>
            <Button variant="contained"
                color={'primary'}
                onClick={() => setCurrentPage(pageNumbers.length)}>
                <NavigateNextIcon  />
                <NavigateNextIcon  />
            </Button>
        </Grid>
    )
};