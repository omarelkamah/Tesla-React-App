import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 25px;
    z-index: 1;
`

const NavbarLeft = styled.div``

const Logo = styled.img``

const NavbarCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }

    a {
        padding: 0 10px;
        text-decoration: none;
        font-weight: 500;
        font-size: 17px;
        text-transform: capitalize
        
    }
`

const NavbarRight = styled.div`
    display: flex;
    align-items: center;
    a {
        padding: 0 10px 0 0;
        text-decoration: none;
        font-weight: 500;
        font-size: 17px;
        text-transform: capitalize

    }
`

const Open = styled(MenuIcon)`
    cursor: pointer;
    margin-top: 5px;
    font-size: 30px !important
`

const NavbarMenue = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 10;
    transition: .7s;
    transform: ${props => props.openMenue ? "translateX(0)" : "translateX(100%)" };

    > a {
      text-decoration: none;
      font-weight: 600;
      padding: 10px 0;
      border-bottom: 1px solid rgb(57 60 65 / 64%);
      margin-bottom: 10px;
      text-transform: capitalize;
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end
`

const Close = styled(CloseIcon)`
    cursor: pointer;
    margin-top: 5px;
    font-size: 30px !important
`

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavbarLeft>
        <Logo src="/images/logo.svg" alt="logo" />
      </NavbarLeft>
      <NavbarCenter>
        <a href="#model-s">Model S</a>
        <a href="#model-3">Model 3</a>
        <a href="#model-x">Model X</a>
        <a href="#model-y">Model Y</a>
        <a href="#lowest">lowest cost</a>
        <a href="#soler">soler system</a>
      </NavbarCenter>
      <NavbarRight>
        <a href="#shop">Shop</a>
        <a href="#acount">Tesla Account</a>
        <Open onClick={() => setOpen(true)} />
      </NavbarRight>
      <NavbarMenue openMenue={open}>
        <CloseWrapper>
          <Close onClick={() => setOpen(false)} />
        </CloseWrapper>
        <a href="#model-s">model s</a>
        <a href="#model-3">model 3</a>
        <a href="#model-x">model X</a>
        <a href="#model-y">model Y</a>
        <a href="#lowest">lowest cost</a>
        <a href="#soler">Soler System</a>
        <a href="#accessories">accessories</a>
      </NavbarMenue>
    </Container>
  )
}

export default Navbar