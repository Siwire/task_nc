import { Grid, Button, TextField } from "@material-ui/core";

export default function CreateNote({appAction}) {

    const {changeInputField, setNewNoteToList} = appAction

    const handleChange = (event) => {
        event.preventDefault();
        changeInputField(event.target.name, event.target.value,);
    }
    const createNewNote = () => {
        setNewNoteToList()
    }

    return (<Grid>
        <TextField autoComplete="off" onChange={handleChange}  variant="outlined" />
        <Button ></Button>
    </Grid>)
}