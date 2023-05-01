import Tweet from "components/Tweet/Tweet";
import { List } from "./ListOfTweets.styled";

const ListOfTweets = ({ currentItems, }) => {
    return (
        <>
            <List>
                {currentItems &&
                  currentItems.map(({id, avatar, followers, tweets}) => (
                    <li key={id}>
                        <Tweet avatar={avatar} followers={followers} tweets={tweets}></Tweet>
                   </li>
               ))}
            </List>
        </>
    )
}

export default ListOfTweets;