import { Button } from "./FollowerButton.styled";
import { useState } from "react";

const FollowerButton = () => {
    const [isFollowing, setIsFollow] = useState(false);

    const onClick = () => {
        setIsFollow(!isFollowing);
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