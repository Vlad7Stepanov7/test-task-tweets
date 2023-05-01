import Tweet from "components/Tweet/Tweet";
import { List, Item } from "./ListOfTweets.styled";

const ListOfTweets = ({ currentItems, handleRefresh }) => {
    return (
        <>
            <List>
                {currentItems &&
                    currentItems.map(({
                        id,
                        avatar,
                        followers,
                        tweets,
                        follower
                    }) => (
                    <Item key={id}>
                            <Tweet
                                avatar={avatar}
                                followers={followers}
                                tweets={tweets}
                                follower={follower}
                                id={id}
                                handleRefresh={handleRefresh}
                            ></Tweet>
                   </Item>
               ))}
            </List>
        </>
    )
}

export default ListOfTweets;