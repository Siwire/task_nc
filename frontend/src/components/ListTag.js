import { Grid, Button, ListItem, List } from "@material-ui/core";
import ItemTag from "./ItemTag";

export default function ListTag({ hashtagList, appAction }) {

    return (<Grid>
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