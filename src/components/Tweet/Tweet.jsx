import { Container, Background, Logo, WrapperForAvatar, Elipse } from "./Tweet.styled";
import FollowerButton from "components/FollowerButton/FollowerButton";
import Statistics from "components/Statistics/Statistics";

const Tweet = ({avatar, followers, tweets}) => {
    return (
        <Container>
            <Logo></Logo>
            <Background></Background>
            <WrapperForAvatar>
                <Elipse avatar={avatar}></Elipse>
            </WrapperForAvatar>
            <Statistics followers={followers} tweets={tweets}></Statistics>
            <FollowerButton/>
        </Container>
    )
}

export default Tweet;