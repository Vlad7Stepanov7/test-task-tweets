import { Container, Background, Logo, WrapperForAvatar, Elipse } from "./Tweet.styled";
import FollowerButton from "../FollowerButton/FollowerButton";
import Statistics from "../Statistics/Statistics";

const Tweet = () => {
    return (
        <Container>
            <Logo></Logo>
            <Background></Background>
            <WrapperForAvatar>
                <Elipse></Elipse>
            </WrapperForAvatar>
            <Statistics></Statistics>
            <FollowerButton/>
        </Container>
    )
}

export default Tweet;