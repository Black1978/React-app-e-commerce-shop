import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import Test from './components/Test'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '.'

const App = observer(() => {
    const {user} = useContext(Context)
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
})

export default App
