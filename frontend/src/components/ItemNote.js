import { Grid, Typography, IconButton, TextField, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

export default function ItemNote({ note, appActions }) {

    const { switchOnEditMode, switchOffEditMode, editNoteText } = appActions
    const getCurrentDate = () => {
        const monthCorrect = note.date.getMonth() < 10 ? `0${note.date.getMonth() + 1}` : note.date.getMonth() + 1;
        return `${note.date.getDate()}.${monthCorrect}.${note.date.getFullYear()}`;
    }

    const onEditMode = () => {
        switchOnEditMode(note)
    }
    const offEditMode = () => {
        switchOffEditMode(note)
    }
    const handleChangeNoteText = (event) => {
        event.preventDefault();
        editNoteText(note, event.target.value)
    }

    const checkEdit = () => {
        if (note.isEdit) {
            return (<Grid>
                <TextField autoComplete="off" onChange={handleChangeNoteText} value={note.noteText} variant="outlined" />
                <Button onClick={offEditMode}>Save</Button>
            </Grid>
            )
        }
        else {
            return <Typography>{note.noteText}</Typography>
        }
    }
    return (<Grid container direction="row" >
        <Grid item xs={10} container justify="flex-end" >
            {checkEdit()}
            <Typography>{getCurrentDate()}</Typography>
        </Grid>
        <Grid item xs={2}>
            <IconButton onClick={onEditMode}>
                <EditIcon />
            </IconButton>
            {/* <IconButton>
                <EditIcon />
            </IconButton> */}
        </Grid>
    </Grid>)
}