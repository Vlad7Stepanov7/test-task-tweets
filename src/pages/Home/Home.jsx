import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <p>HELLO</p>
            <NavLink to="/tweets">Tweets</NavLink>
        </>
    )
}

export default Home;