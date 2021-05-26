import { Grid, Button, ButtonGroup} from '@material-ui/core/';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export function Pagination() {


    return (
        <Grid container spacing={4} justify="space-around">
            <Button variant="contained"
            color={'primary'}>
                <NavigateBeforeIcon fontSize='large' />
                <NavigateBeforeIcon fontSize='large' />
            </Button>
            <ButtonGroup>
                <Button></Button>
            </ButtonGroup>
            <Button variant="contained"
            color={'primary'}>
                <NavigateNextIcon fontSize='large' />
                <NavigateNextIcon fontSize='large' />
            </Button>
        </Grid>
    )
}