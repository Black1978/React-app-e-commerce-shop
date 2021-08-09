import React, { useContext } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { registration, login } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './../index'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.responce.data.message)
        }
    }
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                {isLogin ? (
                    <h2 className='m-auto'>Authorization</h2>
                ) : (
                    <h2 className='m-auto'>Registration</h2>
                )}
                <Form className='d-flex flex-column'>
                    <Form.Control
                        placeholder='Please enter your e-mail'
                        className='mt-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                    <Form.Control
                        placeholder='Please enter your password'
                        className='mt-3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    ></Form.Control>
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? (
                            <div>
                                Don't you have an account yet?
                                <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
                            </div>
                        ) : (
                            <div>
                                If you have an account
                                <NavLink to={LOGIN_ROUTE}> Authorization</NavLink>
                            </div>
                        )}
                        <Button onClick={click} variant='outline-success' className='mt-3'>
                            {isLogin ? 'Enter' : 'Registration'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
