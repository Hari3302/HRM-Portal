import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Modal } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import useAxios from '../axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Styles/CompanyAdd.css"
import cmpimg from "../Images/img (6).jpg"

const CompanyAddForm=()=>{



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    
    p: 4,
  };


  const [phnumber,setphnumber]=useState("");
  const [name,setname]=useState("");
  const [password,setpassword]=useState("");
  const[email,setemail]=useState("");




  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const dataAxios = useAxios();
    
    const navigate = useNavigate()

    const submit=useLocation();
          const signupSubmit=async()=>{
            
            console.log("object",name,email,password,phnumber)
            try{
const datas =await dataAxios.post("students",{company_name:name,phnumber:phnumber,company_emailid:email,no_of_employee:password})
console.log("object",datas) 
alert("You Company Was Added to our HRM Application  Succesfully Please Add Your HR to manage your Employees ")  

        
}catch(err){
                console.log(err)
            }
          }

    return (
        
<>
        <div>
 <Button variant="contained" onClick={handleOpen}>
              Add Company
            </Button>
            
<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}   className="mods" >
<Typography id="modal-modal-title" className='titles' variant="h6" >
          Enter The Company Details
          </Typography>

  <div className='rghtformimg'>

          
          

          <div className='inputs'>
          
                    <div className='input01'>
                        <TextField variant='outlined'  label="Company Name" onChange={(e=>{setname(e.target.value)})}  ></TextField>
                        <FaUser className='icons01'></FaUser>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined'  label="Contact Number" onChange={(e=>{setphnumber(e.target.value)})}  ></TextField>
                        <MdPhoneIphone className='icons01'></MdPhoneIphone>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' onChange={(e=>{setemail(e.target.value)})} label="Company Id" ></TextField>
                        <MdEmail className='icons01'></MdEmail>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' label="Number of Employee" onChange={(e=>{setpassword(e.target.value)})}  ></TextField>
                        <RiLockPasswordFill className='icons01'></RiLockPasswordFill>
                    </div>
                    
 
    


    <div className='signbtn'>
                        <Button variant='contained'  onClick={()=>{signupSubmit() }} style={{ width: '222px',marginLeft:"-80px" }}>SUBMIT</Button>
                    </div>
                </div>
                <img src= {cmpimg} className='cmpimgs'></img>
                </div>
                
                </Box>


</Modal>
</div>

</>
    );
}
export default CompanyAddForm;