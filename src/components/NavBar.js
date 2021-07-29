import React, { useContext } from 'react'
import { Context } from '..'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = () => {
    const { user } = useContext(Context)
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
                    e-SHOP
                </NavLink>
                {user.isAuth ? (
                    <Nav className='ml-auto'>
                        <Button variant={'outline-light'}>Admin board</Button>
                        <Button variant={'outline-light'} className="ml-2">Войти</Button>
                    </Nav>
                ) : (
                    <Nav className='ml-auto'>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
}

export default NavBar
