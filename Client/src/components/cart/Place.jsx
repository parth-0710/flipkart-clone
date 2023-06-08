import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import {styled} from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

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

const Place = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <StyledButton variant="contained" {...bindTrigger(popupState)}>
            Place Order
          </StyledButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>Ordered Successfull!!!</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default Place;