import React, { useContext } from 'react'
import { Context } from '..'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
                    KhENK-e-SHOP
                </NavLink>
                {user.isAuth ? (
                    <Nav className='ml-auto'>
                        <Button variant={'outline-light'} onClick={()=> history.push(ADMIN_ROUTE)}>Admin board</Button>
                        <Button variant={'outline-light'} className="ml-2" onClick={() => history.push(LOGIN_ROUTE)}>Go out</Button>
                    </Nav>
                ) : (
                    <Nav className='ml-auto'>
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Autorization</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
})

export default NavBar
