import "../Styles/Login.css";

import { ReactComponent as RightImg } from "../Images/right.svg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Sign from './Sign';
// import { useState } from 'react';
// import { Password } from '@mui/icons-material';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
// import Dashboard from './Dashboard';
import useAxios from "../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import hrimg from "../Images/hr logo.png";

function Login() {
  const navigate = useNavigate();

  const [user_name, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const axiosData = useAxios();

  const loginSubmit = async () => {
    console.log("email", email);

    try {
      const dataGet = await axiosData.get(`loginDetails/${user_name}`);

      console.log("data", dataGet.data.password === password, dataGet.data);

      navigate("/dash");

      if (dataGet.data !== undefined) {
        if (dataGet.data.password === password) {
          console.log("pass", dataGet.data.password, password);
          if (dataGet.data.user_type === "admin") {
            navigate("/dash", { state: { UserName: dataGet.data.user_name,lable:"Admin Panel" } });

            
            // const userdataname = localStorage.setItem("username", JSON.stringify({ UserName: dataGet.data.user_name })
          }
          if(dataGet.data.user_type ==="employee"){
            navigate('/empdash',{ state: { UserName: dataGet.data.user_name,lable:"Employee Dashboard" } })
          }
          if(dataGet.data.user_type ==="hr"){
            navigate('/hrdash',{ state: { UserName: dataGet.data.user_name ,lable:"HR Dashboard"} })
          }
          if(dataGet.data.user_type ==="empmanger"){
            navigate('/empmangerdash',{ state: { UserName: dataGet.data.user_name ,lable:"Employee Manager Dashboard"} })
          }
          
         
          alert("You Have Successfully Loged in");
        } else {
          console.log("Password wrong");

          alert("You have Entered a Incorrect Credential");
        }
        const userdata = localStorage.setItem(
          "user",
          JSON.stringify({ user_name: dataGet.data.user_name })
        );
      }

      console.log("dataGet", dataGet);
    } catch (err) {
      navigate("/sign");
      console.log(err);
    }
  };

  return (
    <div className="loginpage">
      <div className="leftside">
        <div className="logoimg">
          <a>
            <img src={hrimg} alt="twitch-logo-font" border="0"></img>
          </a>
        </div>
        <Typography variant="h7" style={{ opacity: "70%" }}>
          LOGIN
        </Typography>

        <div className="input1">
          <TextField
            variant="outlined"
            onChange={(e) => {
              setuser_name(e.target.value);
            }}
            placeholder="Username"
          ></TextField>
          <FaUser className="icons01"></FaUser>
        </div>

        {/* <div className='input1'>

                    <TextField variant='outlined' onChange={(e => { setemail(e.target.value) })} placeholder='Email' id='username' className='text01' ></TextField>
                    <FaUser className='icons1' id='icon'></FaUser>
                </div> */}
        <div className="input2">
          <TextField
            variant="outlined"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
            id="password"
          ></TextField>
          <RiLockPasswordFill className="icons2"></RiLockPasswordFill>
        </div>

        <div className="btn">
          <Button onClick={loginSubmit}>Login</Button>
        </div>

        <Typography variant="h7">
          Already have account?'{" "}
          <Button
            onClick={() => {
              navigate("/sign");
            }}
            variant="type"
            style={{ width: "100px" }}
          >
            Sign up
          </Button>
        </Typography>

        <div className="txts">
          <div className="lines"></div>
          <div className="lnks">
            <img src={google} className="googlelogo"></img>
            <Button variant="text" className="lnk1">
              Login with google
            </Button>
          </div>
          <div className="lnks">
            <img src={facebook} className="fblogo"></img>
            <Button variant="text" className="lnk1">
              Login with Facebook
            </Button>
          </div>
        </div>
      </div>
      <div className="rightside">
        <RightImg />
      </div>
    </div>
  );
}

export default Login;
