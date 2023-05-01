import axios from "axios";

export const getTweets = async () => {
    const data = await axios.get("https://644c053717e2663b9dfe3e2b.mockapi.io/api/v1/tweets");
    return data.data
}

export const following = async (id, followers) => {
    const newFollowers = followers + 1;
    const data = await axios.put(`https://644c053717e2663b9dfe3e2b.mockapi.io/api/v1/tweets/${id}`,
        {
            "follower": true,
            "followers": newFollowers 
        }
    );
    return data.data.follower;
}

export const offFollowing = async (id, followers) => {
    const newFollowers = followers - 1;
    const data = await axios.put(`https://644c053717e2663b9dfe3e2b.mockapi.io/api/v1/tweets/${id}`,
        {
            "follower": false,
            "followers": newFollowers
        }
    );
    return data.data.follower;
}