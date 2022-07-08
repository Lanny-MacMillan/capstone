import axios from 'axios'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import '../App.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Home from '../components/Home'



const Logout = (props) => {
    const [users, setUsers] = useState([])
    const [userLogIn, setUserLogIn] = useState(false)
    const [currentUser, setCurrentUser] = useState([])

    const BASE_URL = 'https://glacial-tor-04352.herokuapp.com/api/'

    let emptyUser = {email: '', password: ''}
    const [user, setUser] = useState(emptyUser)



    const [userSignIn, setUserSignIn] = useState({...props.userSignIn})

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        setUserSignIn({...userSignIn, [event.target.name]: event.target.value})

    }
    // const handleChangeLogIn = (event) => {
    //     setUserSignIn({...userSignIn, [event.target.name]: event.target.value})
    // }
    const handleSubmitExit = (event) => {
        event.preventDefault()
        console.log(user)
        createUser(user)
        setUser({email: '', password: ''})
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        console.log(userSignIn)
        handleUserLogin(userSignIn)
    }

    //========READ USER==============
    const getUsers = () => {
        axios
            .get(BASE_URL + 'useraccount')
            .then(
            (response) => setUsers(response.data),
            (err) => console.error(err)
            )
            .catch((error) => console.error(error))
        console.log(users)
    }

    //======== CREATE USER ==============
    const createUser = (addUser) => {
        console.log(addUser)
        axios
            .post(BASE_URL + 'useraccount', addUser)
            .then((response) => {
                setUsers([...users, addUser])
                // setView('login')
            })
    }
    // //======== RETURNING USER LOGIN ========
    const handleUserLogin = (userAccount) => {
        console.log('attempting to return user login')
        console.log(userAccount)
        axios
            .put(BASE_URL + 'useraccount/login', userAccount)
            // .put('http://localhost:8000/api/useraccount/login', userAccount)
            .catch((error) => {
                if (error) {
                    console.log(".catch error")
                    console.log(error)
                    setUserLogIn(false)
                }
            })
            .then((response) => {
                if (response == undefined){
                    alert("No user match, please create an account or try again.")
                    console.log("undefined - no match")
                    console.log(response)
                    setUserLogIn(false)
                } else  {
                    console.log("match")
                    setUserLogIn(true)
                } 
            })
    }

    // //============== LOGIN FORM ==============

    const Login = () => {
        return(
            <>
            <div className="container">

<form>
    <TextField
        style={{ width: "400px", margin: "5px", align: 'center'}}
        type="text"
        label="Email"
        variant="outlined"
        name="email" 
        value={user.email}
        onChange={handleChange}
    />
    <br />
    <TextField
        style={{ width: "400px", margin: "5px" }}
        type="text"
        label="Password"
        variant="outlined"
        name="password" 
        value={user.password}
        onChange={handleChange}
    />
    <br />
    <Button id='Button' onClick={handleSubmitExit} type="submit" variant="contained">Create Account</Button>
    <Button id='Button' onClick={handleSubmitLogin} type="submit" variant="contained">Login</Button>


</form>
    </div>
            </>
        )
    }
    const UserPage = () => {
        return (
            <>
            <h1>User page goes here</h1>
            <h1> ID: {user.id}</h1>
            <h1> Email: {user.email}</h1>
            <h1> Password: {user.password}</h1>
            </>
        )
    }
    useEffect(() => {
        getUsers()
        }, [])

    return (
        <>    
        {userLogIn ? <Home/> : 
        <>
        <h1 id='title'>Goodbye!</h1>
        <h4 id='titleSub'>Thanks for using the Vacation App</h4>
            <div className="container">
                <form id='loginForm'>
            <TextField
                style={{ width: "400px", margin: "5px"}}
                type="text"
                label="Email"
                variant="outlined"
                name="email" 
                value={user.email}
                onChange={handleChange}
            />
            <br />
            <TextField
                style={{ width: "400px", margin: "5px" }}
                type="password"
                label="Password"
                variant="outlined"
                name="password" 
                value={user.password}
                onChange={handleChange}
            />
            <br />
            <Button id='Button' onClick={handleSubmitExit} type="submit" variant="contained">Create Account</Button>
            <Button id='Button' onClick={handleSubmitLogin} type="submit" variant="contained">Login</Button>


                </form>
            </div>

        </>
        
        
        }
        </>
    )
}
export default Logout