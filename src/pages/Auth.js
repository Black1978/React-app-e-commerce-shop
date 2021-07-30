import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(isLogin)
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
                    ></Form.Control>
                    <Form.Control
                        placeholder='Please enter your password'
                        className='mt-3'
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
                        <Button variant='outline-success' className='mt-3'>
                            {isLogin ? 'Enter' : 'Registration'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
