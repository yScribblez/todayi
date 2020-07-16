import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from './Logo';

/**
 * Navbar renders the global navbar for use on all pages
 */
const DefaulNavbar = () => {
  return (
    <Menu attached borderless inverted>
      <Menu.Item>
        <Logo />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>L O G I N</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DefaulNavbar;
