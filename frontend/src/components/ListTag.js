import { Grid, Button, ListItem, List } from "@material-ui/core";
import ItemTag from "./ItemTag";

export default function ListTag({ hashtagList, appAction }) {

    return (<Grid container item xs={12}>
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