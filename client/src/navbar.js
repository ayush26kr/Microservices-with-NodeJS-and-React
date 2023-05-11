import React,{useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import {useNavigate} from 'react-router-dom'

function Navbar(){

    //login page logic
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const Navigate=useNavigate()

    function logout(){
        localStorage.removeItem("loggedin")
        Navigate.push('/')
        window.location.reload(true)
    }

    function login(){
        var users=JSON.parse(localStorage.getItem('users'))  //everyting stored in users array

        var i=0;
        for(var user of users){
            if(user.username==username && user.password==password){
                i++;
            }
        }
        if(i==1){
            alert("Login is Successful");
            localStorage.setItem('loggein','loggedin')
            Navigate.push('/dashboard')      //to move from one url to another
            window.location.reload(true)   //so not to refresh the page everytime
        }else{
            alert("Invalid login");
        }
    }
    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>FaceBook</h1>
            </div>

            <div className='col-md-6'>
               {
                   (()=>{
                    if(localStorage.getItem('loggedin'))  //if user is logged in ,loggedin will return true
                    {
                        return <button onClick={logout}>LOGOUT</button>
                    }
                    else{
                        return <div>
                             <input type='text' placeholder='Username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                             <input type='Password' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                             <button onClick={login}>Login</button>
                            </div>
                    }
                   })()
               }
            </div>

        </div>
    </div>
}
export default Navbar
