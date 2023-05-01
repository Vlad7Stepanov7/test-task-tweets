import { useState } from "react";
import { Button } from "./FollowerButton.styled";
import { following, offFollowing } from "api/api";

const FollowerButton = ({follower, followers, id, handleRefresh}) => {
    const [isFollowing, setIsFollow] = useState(follower);

    const onClick = async () => {
        if (isFollowing) {
            const follower = await offFollowing(id, followers);
            setIsFollow(follower);
            handleRefresh()
            return;
        }

        const follower = await following(id, followers);
        handleRefresh();
        setIsFollow(follower);
    }

    return (
        <>
            <Button
                type="button"
                onClick={onClick}
                isFollowing={isFollowing}
            >
                {isFollowing ? "FOLLOWING" : "FOLLOW"}
            </Button>
        </>
    )
}

export default FollowerButton;