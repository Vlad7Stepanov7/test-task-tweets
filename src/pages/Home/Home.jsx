import { NavLink } from "react-router-dom";
import { Container, Title } from "./Home.styled";

const Home = () => {
    return (
        <Container>
            <Title>WELCOME</Title>
            <p>
                CLick on {" "}
                <NavLink to="/tweets">tweets</NavLink>
              {" "}  to go to the tweets page 
            </p>
        </Container>
    )
}

export default Home;