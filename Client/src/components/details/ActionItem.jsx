import { Box, Button, styled } from "@mui/material"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding:40px 0 0 80px;
`
const Image = styled("img")({
    width: '95%',
    padding: '15px',

});

const StyledButton = styled(Button)`
    width: '46%',
    height: 50,
    borderRadius: 2,
`

const ActionItem = ({ product }) => {

    // console.log("product", { product });
    return (
        <LeftContainer>

            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
            <Image src={product.url} alt={product.title} />
            </Box>
            <StyledButton variant="contained" style={{marginRight : 10, backgroundColor : '#ff9f00',}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{backgroundColor : '#fb641b',}}><FlashOnIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;