import { Grid, Typography, IconButton, TextField, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

export default function ItemNote({ note }) {
    const getCurrentDate = () => {
        const monthCorrect = note.date.getMonth() < 10 ? `0${note.date.getMonth() + 1}` : note.date.getMonth() + 1;
        return `${note.date.getDate()}.${monthCorrect}.${note.date.getFullYear()}`;
    }
    const checkEdit = () => {
        if (false) {
            // return (<Grid>
            //     <TextField autoComplete="off" value={note.noteText} variant="outlined" />
            //     <Button>Save</Button>
            // </Grid>
            // )
        }
        else {
            return <Typography>{note.noteText}</Typography>
        }
    }
    return (<Grid>
        {checkEdit()}
        <Typography>{getCurrentDate()}</Typography>
        {/* <IconButton>
            <EditIcon />
        </IconButton> */}
    </Grid>)
}