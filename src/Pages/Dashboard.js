import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup,StyledFormArea,colors} from "../Components/Styles";

import Logo from "../Assets/logo.png";
const Dashboard = ()=> {
    return(
     <div>
        <div 
         style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",

           }}>
            <Avatar image={Logo}/>
            </div> 
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}> Welcome To SnapTweet</StyledTitle>
                <ButtonGroup><StyledButton to="#">Logout</StyledButton></ButtonGroup>
            </StyledFormArea>

        </div>
    );
};

export default Dashboard;