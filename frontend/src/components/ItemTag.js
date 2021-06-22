import { Link, ListItem, IconButton } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function ItemTag({ hashtag, setHashtagFilter, deleteHashtagFilter }) {

    const selectHashtag = () => {
        setHashtagFilter(hashtag)
    }
    const deleteHashtag = () => {
        deleteHashtagFilter(hashtag)
    }

    return (<ListItem >
        <Link onClick={selectHashtag} >{hashtag}</Link>
        <IconButton onClick={deleteHashtag}>
            <HighlightOffIcon />
        </IconButton>
    </ListItem>)
}