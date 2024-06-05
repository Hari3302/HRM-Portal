// import React from "react";
// import "./Navbar.css";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Grid, TextField, Modal } from "@mui/material";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import tattos from "../img/logo.jpg";
// import img from "../img/loginimg.png";
// import logo from "../img/tattos.png";
// import { useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// function Addbtn() {
//   const initialStateErrors = {
//     name: { required: false },
//     Contact: { required: false },
//     email: { required: false },
//     SSLC: { required: false },
//     HSC: { required: false },
//     DEGREE: { required: false },
//     UserName: { required: false },
//     Password: { required: false },
//     additionalField: { required: false },
//   };
//   const [change, setchange] = useState("");
//   const [opens, setOpens] = useState("");
//   const [errors, setErrors] = useState(initialStateErrors);
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleChanges = (e) => {
//     setchange(e.target.value); // Set value for change state
//     // set different value for opens state
//   };
//   const handleChanged = (e) => {
//     setOpens(e.target.value);
//   };
//   const handleClose = () => setOpen(false);
//   const names = [
//     "Oliver Hansen",
//     "Van Henry",
//     "April Tucker",
//     "Ralph Hubbard",
//     "Omar Alexander",
//     "Carlos Abbott",
//     "Miriam Wagner",
//     "Bradley Wilkerson",
//     "Virginia Andrews",
//     "Kelly Snyder",
//   ];

//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const steps = [
//     "Add a Personal Details",
//     "Add Educational and Proffesional Details",
//     "Create a Username And Password",
//     "Additional Step",
//   ];
//   const style = {
//     fontSize: "18px",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 700,
//     height: 400,
//     bgcolor: "background.paper",
//     border: "2px #000",
//     marginTop: "3em",
//     boxShadow: 24,
//     p: 4,
//     borderRadius: "35px",
//   };

//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleNext = () => {
//     handleSubmit();
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;

//     // Proceed to the next step only if there are no errors
//     if (
//       newActiveStep !== activeStep &&
//       !Object.values(errors).some((error) => error.required)
//     ) {
//       setActiveStep(newActiveStep);
//     }
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   const [inputs, setInputs] = useState({
//     name: "",
//     Contact: "",
//     email: "",
//     SSLC: "",
//     HSC: "",
//     DEGREE: "",
//     UserName: "",
//     Password: "",
//   });
//   const handleInput = (event) => {
//     setInputs({ ...inputs, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = () => {
//     let newErrors = { ...initialStateErrors };
//     let hasError = false;

//     // Validate name field
//     if (inputs.name === "") {
//       newErrors.name.required = true;
//       hasError = true;
//     }

//     // Validate Contact field
//     if (inputs.Contact === "") {
//       newErrors.Contact.required = true;
//       hasError = true;
//     }

//     // Validate email field
//     if (inputs.email === "") {
//       newErrors.email.required = true;
//       hasError = true;
//     }

//     if (inputs.SSLC === "") {
//       newErrors.SSLC.required = true;
//       hasError = true;
//     }

//     if (inputs.HSC === "") {
//       newErrors.HSC.required = true;
//       hasError = true;
//     }

//     if (inputs.DEGREE === "") {
//       newErrors.DEGREE.required = true;
//       hasError = true;
//     }
//     if (inputs.UserName === "") {
//       newErrors.UserName.required = true;
//       hasError = true;
//     }
//     if (inputs.Password === "") {
//       newErrors.Password.required = true;
//       hasError = true;
//     } else if (!isValidEmail(inputs.email)) {
//       // Check for valid email format
//       newErrors.email.invalid = true;
//       hasError = true;
//     }

//     // Validate additionalField (if applicable)
//     if (activeStep === 8 && inputs.additionalField === "") {
//       newErrors.additionalField.required = true;
//       hasError = true;
//     }

//     setErrors(newErrors);

//     // If there's no error, proceed with the form submission
//     if (!hasError) {
//       console.log("Form submitted successfully");
//       // Add your form submission logic here
//     }
//   };

//   const isValidEmail = (email) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <div>
//             <Box sx={{ marginTop: 5 }} className="boxes">
//               <img className="logoses" src={logo} alt="" />
//               <div className="text-feild boxes">
//                 <TextField
//                   className="input-field"
//                   size="small"
//                   placeholder="Please enter a Name"
//                   onChange={handleInput}
//                   label="Name"
//                   name="name"
//                   fullWidth
//                 />
//                 {errors.name.required ? (
//                   <span className="text-danger" style={{ color: "red" }}>
//                     name is required.
//                   </span>
//                 ) : null}
//               </div>
//               <div className="text-feild">
//                 <TextField
//                   className="input-field"
//                   size="small"
//                   placeholder="Please enter a Mobile No"
//                   label="Contact us"
//                   name="Contact"
//                   fullWidth
//                   onChange={handleInput}
//                 />
//                 {errors.name.required ? (
//                   <span className="text-danger" style={{ color: "red" }}>
//                     Contact is required.
//                   </span>
//                 ) : null}
//               </div>
//               <div className="text-feild">
//                 <TextField
//                   className="input-field"
//                   size="small"
//                   placeholder="Please enter an Email"
//                   label="Email"
//                   name="email"
//                   onChange={handleInput}
//                   fullWidth
//                 />
//                 {errors.name.required ? (
//                   <span className="text-danger" style={{ color: "red" }}>
//                     email is required.
//                   </span>
//                 ) : null}
//               </div>
//             </Box>
//           </div>
//         );
//       case 1:
//         return (
//           <Box sx={{ marginTop: 5 }}>
//             <img className="img-one" src={tattos} alt="" />
//             <div className="text-feild">
//               <TextField
//                 className="input-field"
//                 size="small"
//                 placeholder="percentage"
//                 name="email"
//                 onChange={handleInput}
//                 label="SSLC"
//                 fullWidth
//               />
//               {errors.SSLC.required ? (
//                 <span className="text-danger" style={{ color: "red" }}>
//                   name is required.
//                 </span>
//               ) : null}
//             </div>
//             <div className="text-feild">
//               <TextField
//                 className="input-field"
//                 size="small"
//                 placeholder="percentage"
//                 name="email"
//                 onChange={handleInput}
//                 label="HSC"
//                 fullWidth
//               />
//               {errors.HSC.required ? (
//                 <span className="text-danger" style={{ color: "red" }}>
//                   name is required.
//                 </span>
//               ) : null}
//             </div>
//             <div className="text-feild">
//               <TextField
//                 className="input-field"
//                 size="small"
//                 placeholder="percentage"
//                 name="email"
//                 onChange={handleInput}
//                 label="DEGREE"
//                 fullWidth
//               />
//               {errors.DEGREE.required ? (
//                 <span className="text-danger" style={{ color: "red" }}>
//                   name is required.
//                 </span>
//               ) : null}
//             </div>
//           </Box>
//         );
//       case 2:
//         return (
//           <Box sx={{ marginTop: 5 }}>
//             <img className="img-two" src={img} alt="" />
//             <div className="text-feild">
//               <TextField
//                 className="input-field"
//                 size="small"
//                 placeholder="Username"
//                 label="UserName"
//                 fullWidth
//               />
//               {errors.UserName.required ? (
//                 <span className="text-danger" style={{ color: "red" }}>
//                   name is required.
//                 </span>
//               ) : null}
//             </div>
//             <div className="text-feild">
//               <TextField
//                 className="input-field"
//                 size="small"
//                 placeholder="Password"
//                 label="Password"
//                 fullWidth
//               />
//               {errors.Password.required ? (
//                 <span className="text-danger" style={{ color: "red" }}>
//                   name is required.
//                 </span>
//               ) : null}
//             </div>
//           </Box>
//         );

//       case 3:
//         return (
//           <>
//             <Box sx={{ marginTop: 5 }}>
//               <FormControl sx={{ m: 1, minWidth: 290 }} size="small">
//                 <InputLabel id="demo-select-small-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-select-small-label"
//                   id="demo-select-small"
//                   value={change}
//                   label="Age"
//                   onChange={handleChanges}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>

//             <Box sx={{ marginTop: 5 }}>
//               <FormControl sx={{ m: 1, minWidth: 290 }} size="small">
//                 <InputLabel id="demo-select-small-label">Department</InputLabel>
//                 <Select
//                   labelId="demo-select-small-label"
//                   id="demo-select-small"
//                   value={opens}
//                   label="Age"
//                   onChange={handleChanged}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </>
//         );
//       default:
//         return null;
//     }
//   };
//   return (
//     <>
//       <div>
//         <nav className="Addbtn-Warraper">
//           <div className="nav-container">
//             <h1>Employee</h1>
//             <div />
//             <Button variant="contained" onClick={handleOpen}>
//               Add
//             </Button>
//           </div>
//         </nav>
//       </div>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Stepper activeStep={activeStep} alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label}>
//                 <StepButton onClick={handleStep(index)}>{label}</StepButton>
//               </Step>
//             ))}
//           </Stepper>
//           <Typography
//             id="modal-modal-title"
//             className="typos"
//             variant="h6"
//             component="h2"
//           >
//             {steps[activeStep]}
//           </Typography>

//           {getStepContent(activeStep)}

//           <div>
//             <Box
//               sx={{
//                 fontSize: 12,
//                 // display: "flex",
//                 // justifyContent: "flex-end",
//                 mt: 2,
//               }}
//             >
//               <Button
//                 className="btn-select"
//                 //color="inherit"1`
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Button
//                 onClick={() => {
//                   handleNext();
//                 }}
//               >
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box>
//           </div>
//         </Box>
//       </Modal>
//     </>
//   );
// }

// export default Addbtn;