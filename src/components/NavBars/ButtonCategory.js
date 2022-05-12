import * as React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function ButtonCategory() {
  
    return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Categorías
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><NavLink to='/category/ceramicas'>Urnas Ceramicas</NavLink></MenuItem>
            <MenuItem onClick={popupState.close}><NavLink to='/category/metalicas'>Urnas Metalicas</NavLink></MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}