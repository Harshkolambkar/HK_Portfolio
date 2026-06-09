import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;
const navItems = [
  ['Expertise', 'expertise'],
  ['Experience', 'experience'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{
          backgroundColor: scrolled ? 'rgba(13, 17, 22, 0.82)' : 'transparent',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.45)' : 'none',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <Toolbar className='navigation-bar'>

          {/* Logo — always left */}
          <Typography
            className="nav-logo"
            onClick={scrollToTop}
            sx={{ cursor: 'pointer', flexGrow: 0, mr: 2 }}
          >
            HK.
          </Typography>

          {/* Hamburger — mobile only, pushes to left after logo */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Nav links — desktop only, centered/right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 'auto', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} className="nav-link">
                {item[0]}
              </Button>
            ))}

            {/* Theme toggle — far right */}
            <IconButton
              color="inherit"
              onClick={() => modeChange()}
              sx={{ ml: 1 }}
              aria-label="toggle theme"
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Theme toggle on mobile — next to hamburger */}
          <IconButton
            color="inherit"
            onClick={() => modeChange()}
            sx={{ display: { md: 'none' }, ml: 1 }}
            aria-label="toggle theme"
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
