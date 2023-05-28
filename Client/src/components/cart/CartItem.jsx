import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";


import GroupedButton from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
    display: flex;
    border-top: 1px solid #f0f0f0;
    background: #fff;
`

const  LeftContainer = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;

`

const SmallText = styled(Typography)`
    font-size: 14px;
    color: #878787;
    margin-top: 10px;
`
const Remove= styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftContainer>
                <img src={item.url} alt={item.name}  style={{ height: 110, width: 110, margin:10 }} />
                <GroupedButton />
            </LeftContainer>
            <Box style={{ margin: 20 }}>
                <Typography>
                    {addEllipsis(item.title.longTitle)}
                </Typography>
                <SmallText>Seller:RetailNet
                    <Box component ="span">
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="F Assured" style={{width: 50, marginLeft: 10}} />
                    </Box>
                </SmallText>

                <Typography style={{marginTop: 20, fontSize: 18}}>
                    <Box component="span" style={{ fontWeight: 600, fontSize:18 }}>₹{item.price.cost}</Box> &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787', textDecoration: 'line-through' }}>₹{item.price.mrp}</Box> &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
                </Typography>

                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;