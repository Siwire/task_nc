import './main.scss';
import { Grid, List } from "@material-ui/core";
import CreateNote from './CreateNote';
import ListTag from './ListTag';
import ListNote from './ListNote';


export default function Main({appActions, noteStore}) {
    return <Grid container className="aaa" item xs={12} direction="row" >
        <Grid item sm={6} xs={12} container justify="center"className="root">
            <CreateNote appAction={appActions} inputField={noteStore.inputField}/>
            <ListTag hashtagList={noteStore.hashtagList} appAction={appActions}/>
        </Grid>
        <Grid item sm={6} xs={12} className="root" >
            <ListNote noteList={noteStore.noteList} 
            filteredNoteList={noteStore.filteredNoteList}
            appAction={appActions}
            />
        </Grid>
    </Grid>
}