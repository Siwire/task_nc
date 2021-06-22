import { Grid, Button, ListItem, List } from "@material-ui/core";
import ItemTag from "./ItemTag";

export default function ListTag({ hashtagList, appAction }) {

    const { deleteSelectedHashtag } = appAction

    const viewAllNotes = () => {
        deleteSelectedHashtag()
    }

    return (<Grid>
        <Button onClick={viewAllNotes}>View All Notes</Button>
        <List>
            {
                hashtagList && hashtagList.map((hashtag, index) => {
                    return <ItemTag key={index} hashtag={hashtag}
                        setHashtagFilter={appAction.setHashtagFilter}
                        deleteHashtagFilter={appAction.deleteHashtagFilter}
                    />
                })
            }
        </List>
    </Grid>)
}