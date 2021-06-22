import { Button, Grid, List } from "@material-ui/core";
import ItemNote from "./ItemNote";

export default function ListNote({ noteList, filteredNoteList }) {
    return (<Grid>
        <List>
            {
                filteredNoteList && filteredNoteList.map((note, index) => {
                    
                    return <ItemNote key={index} note={note}/>
                })
            }
        </List>
    </Grid>)
}