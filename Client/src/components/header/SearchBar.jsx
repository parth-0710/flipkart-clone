import { Search } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const SearchContainer = styled(Box)`
    background-color: #fff;
    width: 40%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const SearchIcon = styled(Search)`
    color: #2874f0;
    padding: 5px;
    display:flex;

`

const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchBar = () => {

    return (
        <SearchContainer>
            <InputSearch 
                placeholder="Search for products, brands and more"
            />
            <SearchIcon/>
          
        </SearchContainer>
    )
}    

export default SearchBar;