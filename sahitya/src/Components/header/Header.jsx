
import React from 'react';
import { AppBar, Toolbar, Typography , styled } from '@mui/material';
import {Link} from 'react-router-dom';
const Component = styled(AppBar)`
background: #61bff1;;
color:#fd0303;
`;
const Container =styled(Toolbar)`
justify-content: center;
& > a {
  padding: 20px;
  // color: black;
  text-decoration: none;
}
`
const Header = () => {
  return (
      <Component>
        <Container>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Login'>Logout</Link>
        </Container>
      </Component>
  )
}

export default Header ;
