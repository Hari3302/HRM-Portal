import React from 'react'
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import PrimarySearchAppBar from "../MajorComponents/Navbar";
import "../Styles/HrDash.css";

import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useLocation } from "react-router-dom";
import useAxios from '../axios';


const CustomPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

const EmployeeManagerDashboard = () => {

  const location =useLocation();
    const options = ["Pending Request", "Approved Request"];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [name,setname]=useState();
  const [dataGet, setDataGet] = useState([]);

  const axiosData = useAxios(); 

  // Dummy data for number of employees and managers
  const numberOfEmployees = 100;
  const numberOfManagers = 10;

  useEffect(() => {
   
    axiosData.get(`/leaveformdetails`).then((response) => {
      setDataGet(response.data);
    });
  }, []);

  const search = (onChange) => {};


  return (
  <>
   <PrimarySearchAppBar  head={location.state.lable} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <CustomPaper>
              <Typography variant="h5" gutterBottom>
                Employee Manager Dashboard
              </Typography>
            </CustomPaper> */}
          </Grid>
          <Grid item xs={6}>
            <CustomPaper className="boxer">
              <Typography variant="h6" gutterBottom>
                Number of Employees
              </Typography>
              <Typography variant="h3">{numberOfEmployees}</Typography>
            </CustomPaper>
          </Grid>
          <Grid item xs={6}>
            {/* <CustomPaper className="boxer">
              <Typography variant="h6" gutterBottom>
                Number of Employee Managers
              </Typography>
              <Typography variant="h3">{numberOfManagers}</Typography>
            </CustomPaper> */}
          </Grid>
        </Grid>





        <div>
          <div className="aboveTable">
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 400 }}
              renderInput={(params) => (
                <TextField {...params} label="Filters" />
              )}
            />

            <TextField
              variant="outlined"
              label="Search"
              onChange={search}
              className="searches"
              sx={{ width: 700 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
           
          </div>
        </div>

        {value === "Pending Request" ? (
          <>
            <div className="tableshead">
              <Typography variant="h6">Pending Request</Typography>
            </div>
            <div className="tableBox">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, borderRadius: "20%" }}
                  aria-label="customized table"
                >
                  <TableHead sx={{ backgroundColor: "#1976d2" }}>
                    <TableRow>
                    <TableCell className="rowscells" align="left">
                        Employee name
                      </TableCell>
                      <TableCell className="rowscells" align="left">
                        Leave From
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Leave To
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Reason of the Leave
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Type of  Leave
                      </TableCell>
                      <TableCell className="rowscells" textAlign="Center">
                        Status
                      </TableCell>
                     
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataGet.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="answers" align="left">
                          {row.user_name}
                       
                        </TableCell>
                        <TableCell className="answers" align="left">

{/* 
                        leavefrom:{type:String},
    leaveto:{type:String},
    user_type:{type:String},
    user_name: { type: String, required: true  },
    reason_of_leave:{type:String},
    type_of_leave:{type:String} */}
                          {row.leavefrom}
                          
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.leaveto}
                          
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.reason_of_leave}
                         
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.type_of_leave}
                         
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          <div className="actions">
                           <Button startIcon={<DoneOutlineOutlinedIcon/>} sx={{backgroundColor:"green",color:"white"}} variant='h4' >Accept</Button>
                               
                           <Button startIcon={<CancelOutlinedIcon/>} sx={{backgroundColor:"red",color:"white"}} variant='h4' >Reject</Button>
                        </div>
                        </TableCell>

                      </TableRow>
                   ))} 
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        ) : (
          <>
            <div className="tableshead">
              <Typography variant="h6"> Approved Request</Typography>
            </div>
            <div className="tableBox">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, borderRadius: "20%" }}
                  aria-label="customized table"
                >
                  <TableHead sx={{ backgroundColor: "#1976d2" }}>
                    <TableRow>
                      <TableCell className="rowscells" align="left">
                        Leave From
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Leave To
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Reason of the Leave
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Type of  Leave
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Status
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {dataGet.map((row, index) => ( */}
                      <TableRow
                        // key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="answers" align="left">
                          {/* {row.user_name} */}
                          12/02/2024
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.emailid} */}
                          16/02/2024
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.phone_number} */}
                          Valentine day out
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.phone_number} */}
                          Earn Leave
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          <div className="actions">
                            {/* <EditIcon
                              sx={{
                                color: "white",
                                backgroundColor: "green",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            /> */}

                             <Button
                              sx={{
                                color: "white",
                                backgroundColor: "green",
                                borderRadius: "20%",
                                padding: "5px",
                              }}
                              
                             > Leave Approved  </Button> 
                          </div>
                        </TableCell>

                        <TableCell className="answers" align="Center">
                          <Button variant="outlined"> Say Thanks</Button>
                        </TableCell>
                      </TableRow>
                    {/* ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        )}

        </Container>
  </>
  )
}

export default EmployeeManagerDashboard