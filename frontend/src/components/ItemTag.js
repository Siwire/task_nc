import { Link, Grid, ListItem, IconButton } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function ItemTag({ hashtag, setHashtagFilter, deleteHashtagFilter }) {

    const selectHashtag = () => {
        setHashtagFilter(hashtag)
    }
    const deleteHashtag = () => {
        deleteHashtagFilter(hashtag)
    }

    return (<Grid className="root_item_hashtag" >
        <Link onClick={selectHashtag} >{hashtag}</Link>
        <IconButton onClick={deleteHashtag}>
            <HighlightOffIcon />
        </IconButton>
    </Grid>)
}