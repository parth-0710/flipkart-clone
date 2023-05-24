import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";

import { useState, useContext } from "react";
import {DataContext} from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
`

const StyledButton = styled(Button)`
    background-color: #fff;
    color: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        background-color: #fff;
        box-shadow: none;
    }
`

const Container = styled(Box)`
    display: flex;
    align-items: center;
  
`
const Cart = styled(Typography)`

    display: flex;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                            <StyledButton variant="contained" onClick={() => openDialog()}>
                                Login
                            </StyledButton>
            }

            <Typography style={{marginTop: 3, width: 135}}>Became a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container>
                <Cart><ShoppingCartIcon />Cart</Cart>
                
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;