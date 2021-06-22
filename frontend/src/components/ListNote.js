import { Grid, List } from "@material-ui/core";
import ItemNote from "./ItemNote";

export default function ListNote({ noteList }) {
    return (<Grid>
        <List>
            {
                noteList && noteList.map((note, index) => {
                    
                    return <ItemNote key={index} note={note}/>
                })
            }
        </List>
    </Grid>)
}