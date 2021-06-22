import './main.scss';
import { Grid, List } from "@material-ui/core";
import CreateNote from './CreateNote';
import ListTag from './ListTag';
import ListNote from './ListNote';


export default function Main({appActions}) {
    return <Grid className="aaa" direction="row">
        <Grid item xs={6}>
            <CreateNote appAction={appActions}/>
            <ListTag />
        </Grid>
        <Grid item xs={6}>
            <ListNote />
        </Grid>
    </Grid>
}