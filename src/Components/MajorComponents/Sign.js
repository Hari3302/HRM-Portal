import '../Styles/Sign.css';
import rightimg from '../Images/Mobile login-pana.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import useAxios from '../axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import hrimg from "../Images/H R Management.png"
import '../Styles/Navbar.css'

function Sign() {

    const [phnumber,setphnumber]=useState("");
    const [usertype , setusertype]=useState("")
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const[email,setemail]=useState("");

    const dataAxios = useAxios(); 
    
    
    const navigate = useNavigate()

    const submit=useLocation();
          const signupSubmit=async()=>{
            
            console.log("object",name,email,password,phnumber)
            try{
const datas =await dataAxios.post("loginDetails",

{   user_name:name,
    phone_number:phnumber,
    emailid:email,
    password:password}
)
console.log("object",datas) 
alert("You Account Was Created Succesfully")  
navigate("/")
        
}catch(err){
                console.log(err)
            }
          }
    return (
        <div className='Sign'>
            <div className='left'>
                <div className='logoimg' >
                <a ><img src={hrimg} alt="twitch-logo-font" border="0"></img></a>
                </div>
                <Typography variant='h7' style={{ opacity: '70%' }}>SIGN UP</Typography>

                <div className='inputs'>
                    <div className='input01'>
                        <TextField variant='outlined'  label="User Name" onChange={(e=>{setname(e.target.value)})} placeholder=' User Name' ></TextField>
                        <FaUser className='icons01'></FaUser>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined'  label="Contact Number" onChange={(e=>{setphnumber(e.target.value)})} placeholder='Phone Number' ></TextField>
                        <MdPhoneIphone className='icons01'></MdPhoneIphone>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' label="Email ID" onChange={(e=>{setemail(e.target.value)})} placeholder='Email' ></TextField>
                        <MdEmail className='icons01'></MdEmail>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' label="Password" onChange={(e=>{setpassword(e.target.value)})} placeholder='Password' ></TextField>
                        <RiLockPasswordFill className='icons01'></RiLockPasswordFill>
                    </div>
                    
                    <div className='signbtn'>
                        <Button variant='contained'  onClick={()=>{
                            signupSubmit()
                        }} style={{ width: '222px' }}>SUBMIT</Button>
                    </div>

                </div>

            </div>
            <div className='right'>
                <img src={rightimg} alt='rimg'></img>

            </div>


        </div>
    )
}

export default Sign