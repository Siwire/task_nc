import './main.scss';
import { Grid, List } from "@material-ui/core";
import CreateNote from './CreateNote';
import ListTag from './ListTag';
import ListNote from './ListNote';


export default function Main({appActions, noteStore}) {
    return <Grid container className="aaa" item xs={12} direction="row">
        <Grid item xs={6}>
            <CreateNote appAction={appActions} inputField={noteStore.inputField}/>
            <ListTag hashtagList={noteStore.hashtagList}/>
        </Grid>
        <Grid item xs={6}>
            <ListNote noteList={noteStore.noteList}/>
        </Grid>
    </Grid>
}