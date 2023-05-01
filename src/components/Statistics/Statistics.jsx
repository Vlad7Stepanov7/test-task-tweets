import { List, Item } from "./Statistics.styled";

const Statistics = ({ followers, tweets }) => {
    
    const convertedFollowers = followers + "";
    const arrayFollowers = convertedFollowers.split("");
      
    if (arrayFollowers.length > 3) {
         arrayFollowers.splice(3, 0, ",");
        
    }
    
    return (
        <>
            <List>
                <Item>{tweets} TWEETS</Item>
                <Item>{arrayFollowers} FOLLOWERS</Item>
            </List>
        </>
    )
}

export default Statistics;