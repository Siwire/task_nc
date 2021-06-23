import { Grid, Typography, IconButton, TextField, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

export default function ItemNote({ note, appActions }) {

    const { switchOnEditMode, switchOffEditMode, editNoteText } = appActions
    const getDate = () => {
        const monthCorrect = note.date.getMonth() < 10 ? `0${note.date.getMonth() + 1}` : note.date.getMonth() + 1;
        return `${note.date.getDate()}.${monthCorrect}.${note.date.getFullYear()}`;
    }
    const date = getDate()

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
                <TextField autoComplete="off" multiline={true} rowsMax={20} onChange={handleChangeNoteText} value={note.noteText} variant="outlined" />
                <Button onClick={offEditMode}>Save</Button>
            </Grid>
            )
        }
        else {
            return <p className="text_item_note">{note.noteText}</p>
        }
    }
    return (<Grid container direction="row"  className="root_item_note">
        <Grid item xs={10} container justify="flex-end" >
            <Grid item xs={12}>
                {checkEdit()}
            </Grid>
            <Grid item xs={12} container justify="flex-start">
                <p className="time_item_note">{date}</p>
            </Grid>
        </Grid>
        <Grid item xs={2} container alignItems="flex-start">
            <IconButton onClick={onEditMode}>
                <EditIcon />
            </IconButton>
        </Grid>
    </Grid>)
}