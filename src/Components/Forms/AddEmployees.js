import React from "react";
import "../Styles/Addform.css"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, TextField, Modal } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import tattos from "../Images/img (1).jpg";
import img from "../Images/img (4).jpg";
import logo from "../Images/img (3).jpg";
import { useState ,useEffect} from "react";
import useAxios from "../axios";
import { useLocation } from 'react-router-dom';

function AddEmployee() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataGet, setDataGet] = useState([]);

  const axiosData = useAxios(); 



  useEffect(() => {
    axiosData.get(`empdetails`).then((response) => {
      setDataGet(response.data);
    });
  }, []);

  
  const steps = [
    "Add a Personal Details",
    "Add Educational and Proffesional Details",
    "Create a Username And Password",
  ];
  const style = {
    fontSize: "18px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 450,
    bgcolor: "background.paper",
    border: "2px #000",
    marginTop: "3em",
    boxShadow: 24,
    p: 4,
    borderRadius: "35px",
  };



  //////  personal details----------------->
  const [name,setname]=useState("");
  const [phnumber,setphnumber]=useState("");
  const[email,setemail]=useState("");


  ////////////user name  password ---------------->

  const[userName , setuserName]=useState("")
  const [password,setpassword]=useState("");

  /////////////  educational deatils--------------->

  const [sslc,setsslc]=useState("");
  const [hsc,sethsc]=useState("");
  const [degree,setdegree]=useState("");
  const[exper,setexper]=useState("")

  

  const dataAxios = useAxios();

  const submit=useLocation();
  const signupSubmit=async()=>{
    
    console.log("object",name,email,password,phnumber)
    try{

await dataAxios.post("empdetails",
     {name:name,
  phone_number:phnumber,
  emailid:email,
  user_name:userName,
  password:password,
  emp_sslc:sslc,
  emp_hsc:hsc,
  emp_degree:degree,
  emp_experience:exper})

 await
  dataAxios.post("loginDetails",

  {   user_name:userName,
      user_type:'employee',
      phone_number:phnumber,
      emailid:email,
      password:password})

console.log("object") 
alert("You have Succesfully Created the Employee")  

}catch(err){
        console.log(err)
    }
    
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };





  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <Box sx={{ marginTop: 5 }} className="boxes">
              <img className="logoses" src={logo} alt="" />
              <div className="text-feild boxes">
                <TextField
                  className="input-field"
                  size="small"
                  placeholder="Please enter a Name"
                  label="Name"
                  onChange={(e=>{setname(e.target.value)})} 
                  fullWidth
                />
              </div>
              <div className="text-feild">
                <TextField
                  className="input-field"
                  size="small"
                  placeholder="Please enter a Mobile No"
                  label="Phone Number"
                  onChange={(e=>{setphnumber(e.target.value)})}
                  fullWidth
                />
              </div>
              <div className="text-feild">
                <TextField
                  className="input-field"
                  size="small"
                  placeholder="Please enter an Email"
                  onChange={(e=>{setemail(e.target.value)})} 
                  label="Email"
                  fullWidth
                />
              </div>
            </Box>
          </div>
        );
      case 1:
        return (
          <Box sx={{ marginTop: 5 }}>
            <img className="img-one" src={tattos} alt="" />
            <div className="text-feild">
              <TextField
                className="input-field"
                size="small"
                placeholder=" Enter your Percentage"
                label="SSLC"
                onChange={(e=>{setsslc(e.target.value)})} 
                fullWidth
              />
            </div>
            <div className="text-feild">
              <TextField
                className="input-field"
                size="small"
                placeholder="Enter your Percentage"
                onChange={(e=>{sethsc(e.target.value)})} 
                label="HSC"
                fullWidth
              />
            </div>
            <div className="text-feild">
              <TextField
                className="input-field"
                size="small"
                placeholder=" Branch With Percentage"
                onChange={(e=>{setdegree(e.target.value)})} 
                label="DEGREE"
                fullWidth
              />
              </div>
              <div className="text-feild">
               <TextField
                className="input-field"
                size="small"
                placeholder=" Branch With Percentage"
                onChange={(e=>{setexper(e.target.value)})} 
                label="Experience"
                fullWidth
              />
            </div>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ marginTop: 5 }}>
            <img className="img-two" src={img} alt="" />
            <div className="text-feild">
              <TextField
                className="input-field"
                size="small"
                placeholder="Username"
                onChange={(e=>{setuserName(e.target.value)})} 
                label="UserName"
                fullWidth
              />
            </div>
            <div className="text-feild">
              <TextField
                className="input-field"
                size="small"
                placeholder="Password"
                onChange={(e=>{setpassword(e.target.value)})} 
                label="Password"
                fullWidth
              />
            </div>
          </Box>
        );
      default:
        return null;
    }
  };
  return (
    <>
     
            <Button variant="contained" onClick={handleOpen}>
              Add Employees
            </Button>
        

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
          <Typography id="modal-modal-title" className="typos" variant="h6" component="h2">
            {steps[activeStep]}
          </Typography>

          {getStepContent(activeStep)}

          <div>
            <Box
              sx={{
                fontSize: 12,
                // display: "flex",
                // justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <Button
                className="btn-select"
                //color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              <Button  onClick={()=>{
                            signupSubmit()
                        }} >Create Employee </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default AddEmployee;
