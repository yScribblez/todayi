import React from 'react';
import { Image } from 'semantic-ui-react';

import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div>
      <Image
        inline
        src={logo}
        size="mini"
        style={{ margin: '0em 1em 0em 0em' }}
      />{' '}
      T O D A Y I
    </div>
  );
};

export default Logo;
