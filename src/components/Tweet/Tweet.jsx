import { Container, Background, Logo, WrapperForAvatar, Elipse } from "./Tweet.styled";
import FollowerButton from "components/FollowerButton/FollowerButton";
import Statistics from "components/Statistics/Statistics";

const Tweet = ({avatar, followers, tweets, follower, id, handleRefresh}) => {
    return (
        <Container>
            <Logo></Logo>
            <Background></Background>
            <WrapperForAvatar>
                <Elipse avatar={avatar}></Elipse>
            </WrapperForAvatar>
            <Statistics followers={followers} tweets={tweets}></Statistics>
            <FollowerButton follower={follower} followers={followers} id={id} handleRefresh={handleRefresh} />
        </Container>
    )
}

export default Tweet;