import { Grid, List } from "@material-ui/core";
import ItemNote from "./ItemNote";

export default function ListNote({ filteredNoteList, appAction }) {
    return (<Grid container justify="center">
        <List>
            {
                filteredNoteList && filteredNoteList.map((note, index) => {
                    return <ItemNote key={index} note={note} appActions={appAction} />
                })
            }
        </List>
    </Grid>)
}