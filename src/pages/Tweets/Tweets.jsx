import { useState, useEffect } from "react";
import { Container, ButtonBack } from "./Tweets.styled";
import Paginator from "components/Paginator/Paginator";
import { getTweets } from "api/api";




const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [refreshTweets, setRefreshTweets] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const allTweets = await getTweets();
            setTweets(allTweets);
        }
        fetch();
    }, [refreshTweets])

    const handleRefresh = () => {
        setRefreshTweets(!refreshTweets);
    }
    
    return (
        <Container>
            <ButtonBack to="/">Back</ButtonBack>
            <Paginator itemsPerPage={3} tweets={tweets} handleRefresh={handleRefresh}></Paginator>
        </Container>
    )
}

export default Tweets;