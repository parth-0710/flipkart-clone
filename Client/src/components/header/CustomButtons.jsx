import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";

import { useState, useContext } from "react";
import {DataContext} from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    margin: '0 3% 0 auto',
    '& > *':{
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }

}));
    
   


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

const Container = styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }

}));
   
  

const Cart = styled(Typography)`

    display: flex;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const { CartItems } = useSelector(state => state.cart);


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

            <Container to ="/cart">
             
                <Badge badgeContent={CartItems?.length} color="secondary">

                    <ShoppingCartIcon />
                </Badge>
                    
                   <Typography style={{ marginLeft:10 }}>
                    Cart
                    
                    </Typography>
                    
                
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;