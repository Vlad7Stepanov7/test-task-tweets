import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Paginator from "components/Paginator/Paginator";
import axios from "axios";




const Tweets = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await axios.get("https://644c053717e2663b9dfe3e2b.mockapi.io/api/v1/tweets")
            setTweets(data.data);
        }
        fetch();
    }, [tweets])
    
    return (
        <>
            <Paginator itemsPerPage={3} tweets={tweets}></Paginator>
            
            <NavLink to="/">Back</NavLink>
        </>
    )
}

export default Tweets;