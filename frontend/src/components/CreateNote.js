import { Grid, Button, TextField, Typography } from "@material-ui/core";

export default function CreateNote({appAction, inputField}) {

    const {changeInputField, addNewNote} = appAction

    const handleChange = (event) => {
        event.preventDefault();
        changeInputField( event.target.value);
    }
    const createNewNote = () => {
        addNewNote(inputField)
    }
    return (<Grid container justify="flex-start" direction="column">
        <Typography>Create Note</Typography>
        <TextField autoComplete="off" onChange={handleChange} value={inputField} variant="outlined" />
        <Button disabled={!inputField.trim().length} onClick={createNewNote}>Create</Button>
    </Grid>)
}