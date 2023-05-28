import { Box, Button, styled } from "@mui/material"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({theme})=>({
    marginRight: '10px',
    minWidth: '40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px',
    },
   
}));
    

const Image = styled("img")({
    width: '95%',
    padding: '15px',

});

const StyledButton = styled(Button)(({theme})=>({
    margin: '5px 0',
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down['lg']]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }

}));

const ActionItem = ({ product }) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const { id } = product;

    

    const addItemToCart = () => {

        dispatch(addToCart(id, qty));
        navigate('/cart');
    }

    // console.log("product", { product });
    return (
        <LeftContainer>

            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
            <Image src={product.url} alt={product.title} />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight : 10, backgroundColor : '#ff9f00',}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{backgroundColor : '#fb641b',}}><FlashOnIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;