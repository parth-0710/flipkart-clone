
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import SearchBar from "./SearchBar";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";


const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 56px;
`
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0px;
`

const SubHeader = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    
`
const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                
                <Component to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" style={{width: 75}} />
                <Box>
                    <SubHeader>
                        Explore&nbsp;
                        <typography style={{color: "#ffe500"}}>Plus</typography>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="Flipkart" style={{width: 10, marginLeft: 4}} />
                        
                    </SubHeader>
                </Box>
                </Component>  
                <SearchBar /> 

                <CustomButtons />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;