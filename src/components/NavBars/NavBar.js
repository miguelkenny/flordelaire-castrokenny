import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../img/logo.png';
import './NavBar.css';
import ButtonCategory from './ButtonCategory';
import {CartWidget} from '../CartComponnets/CartWidget';
import { NavLink } from 'react-router-dom';

const pages = [
  {name:'Tienda', route:'/', id:'home'},
  {name:'Sobre Nosotros', route:'page/about', id:'about'},
  {name:'Contacto', route:'page/contact', id:'contact'}
];

const NavBar = ({welcome, name}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container className="appBarColorBg" maxWidth="">
        <Toolbar disableGutters>
          <NavLink to="/">  
            <Box
              component="img"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              src={Logo}
              className="logo"
            >
            </Box>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink key={page.id} to={page.route}>{page.name}</NavLink></Typography>
                </MenuItem>
              ))}
              <ButtonCategory />
            </Menu>
          </Box>
          <NavLink to="/">
            <Box
              component="img"
              sx={{ mr:'2', display: { xs: 'flex', md: 'none' } }}
              src={Logo}
              className='logo'
            >
            </Box>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink key={page.id} to={page.route}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  className="btnMenuColor"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  {page.name}
                </Button>
              </NavLink>
            ))}
            <ButtonCategory />
          </Box>

          <NavLink to="/cart">
            <div>
              <Box sx={{ flexGrow: 0}}>
                <CartWidget className="shopIcon"/>
              </Box>
            </div>
          </NavLink>
          <h5 className="m-2">{welcome} {name}</h5>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;