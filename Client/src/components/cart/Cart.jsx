
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
// import Place from "./Place";


const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',

    [theme.breakpoints.down('sm')]:{
        padding: '30px 0px',

    }
}))

const ButtonWrapper = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;

`

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 500;
`

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`

const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{
        marginBottom: 20
    }
}))

const buyNow = async() => {
       let response = await payUsingPaytm({ amount: 500, email: 'printhelloworld39@gmail.com' });
       let information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response
    }
    post(information);
}

const Cart = () => {



    // console.log("cart");
    const { CartItems } = useSelector(state => state.cart);
    // console.log("CartItems", CartItems);
    return (
        <>
        {
            CartItems.length ?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>
                                My Cart({CartItems.length})
                            </Typography>
                        </Header>    
                        {
                            CartItems.map(item => (
                                <CartItem item={item} />
                            ))
                        }
                        <ButtonWrapper>
                        <StyledButton onClick={()=>buyNow()}>
                            Place Order
                        </StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView CartItems={CartItems}/>
                    </Grid>
                </Container>
            : <EmptyCart/>  
        }
        </>
    )
}

export default Cart;