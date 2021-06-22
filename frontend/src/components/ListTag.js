import { Grid, Typography } from "@material-ui/core";

export default function ListTag({ hashtagList }) {
    return (<Grid>
        {
            hashtagList && hashtagList.map(hashtag => {
                return <Typography>{hashtag}</Typography>
            })
        }
    </Grid>)
}