import { Grid, Button, TextField, Typography } from "@material-ui/core";

export default function CreateNote({ appAction, inputField }) {

    const { changeInputField, addNewNote, deleteSelectedHashtag } = appAction

    const handleChange = (event) => {
        event.preventDefault();
        changeInputField(event.target.value);
    }
    const createNewNote = () => {
        addNewNote(inputField)
    }
    const viewAllNotes = () => {
        deleteSelectedHashtag()
    }
    return (<Grid container direction="column" justify="flex-start" alignItems="center" item xs={10} >
            <Typography>Create Note</Typography>
            <TextField autoComplete="off" className="input" onChange={handleChange} multiline={true} rowsMax={20} value={inputField} variant="outlined" />
            <Button className="bttn" disabled={!inputField.trim().length} onClick={createNewNote}>Create</Button>
            <Button className="bttn" onClick={viewAllNotes}>View All Notes</Button>
    </Grid>)
}