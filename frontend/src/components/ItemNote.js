import { Grid, Typography } from "@material-ui/core";

export default function ItemNote({ note }) {
    const getCurrentDate = () => {
        const monthCorrect = note.date.getMonth() < 10 ? `0${note.date.getMonth() + 1}` : note.date.getMonth() + 1;
        return `${note.date.getDate()}.${monthCorrect}.${note.date.getFullYear()}`;
    }
    return (<Grid>
        <Typography>{note.noteText}</Typography>
        <Typography>{getCurrentDate()}</Typography>
    </Grid>)
}