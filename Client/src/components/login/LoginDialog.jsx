import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';


import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
    height: 70vh;
    width: 90vh; 
    display: flex;
`
const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') no-repeat center 85%;
    height: 82%;
    width: 28%;
    padding: 45px 35px;
    & > * {
        color: #fff;
        font-weight: bold;
    }

`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 10px 35px;
    flex: 1;
    & > div, & > button, & > p, & > h5, & > h6 {
        margin-top: 20px;
    }
`

const Login = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    font-size: 16px;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
    line-height: 1.5;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`
const accountInitialValues = {
    login: {
        view: 'login',  
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Sign up with your mobile number to get started',
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState({});
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
        console.log(signup);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();  
        setAccount(signup.username);
    }
    

    const onValueChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        
    }

    const loginuser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();  
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
        
    }

    return (
      <Dialog open={open} onClose={handleClose} PaperProps={{sx: { maxWidth: 'unset'}}}>
        <Component>
            <Image>
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
            </Image>
            {
            account.view === 'login' ?
            <Wrapper>
                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter Username'/>
{
                error && <Typography style={{color: 'red', fontSize: 10}}>Invalid username or password</Typography>
}                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>  
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <Login onClick={() => loginuser()}>Login</Login>
                <Typography style={{textAlign: 'center'}}>OR</Typography>
                <RequestOTP >Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount> 
            </Wrapper> 
            :
            <Wrapper>
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname'/>
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname'/>  
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter Email'/>  
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/> 
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone'/>  

                <Login onClick={() => signupUser()}>Continue</Login>
            </Wrapper>

}
        </Component>

      </Dialog>

      
    )
}

export default LoginDialog;