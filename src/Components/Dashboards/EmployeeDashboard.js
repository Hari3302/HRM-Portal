import React, { useState } from "react";
import "../Styles/ApplyLeave.css";
import Leavebtn from '../Forms/leaveBtn'
import PrimarySearchAppBar from "../MajorComponents/Navbar";
import {
  Container,
  // Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAxios from "../axios";

function ApplyLeave() {


  const location = useLocation();
  const options = ["Pending Request", "Approved Leaves"];
  

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [datasget,setDatasGet]=useState();
  const search = (onChange) => {};

  const axiosData = useAxios(); 

  useEffect(() => {
   
    axiosData.get(`/leaveformdetails`).then((response) => {
      setDatasGet(response.data);
    });
  }, []);


  return (

    <>
          <PrimarySearchAppBar head={location.state.lable} />

          <Container maxWidth="lg " >
            
    <div className="flex-container ">
      <div className="flex-box">
        <Typography className="numbersHead"
         
        >
          Number of Working days
          <br></br>
          <Typography className="numbers" variant="h5">
            15/24 

          </Typography>
        </Typography>
      </div>
      <div className="flex-box-container">
        <Typography
        className="numbersHead"
         
        >
          Number of leave taken <br></br>
          <Typography className="numbers" variant="h5">
            03/05

          </Typography>
        </Typography>
      </div>
      
    </div>





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
           <Leavebtn/>
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
                          10/09/2024
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.emailid} */}
                          12/09/2024
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.phone_number} */}
                          Health Issue ,Reached Clinic
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {/* {row.phone_number} */}
                          Sick Leave
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
                                color: "black",
                                backgroundColor: "Yellow",
                                borderRadius: "20%",
                                padding: "5px",
                              }}
                              
                             >Pending </Button> 
                          </div>
                        </TableCell>

                        <TableCell className="answers" align="Center">
                          <Button variant="outlined"> Request  Again</Button>
                        </TableCell>
                      </TableRow>
                    {/* ))} */}
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
  );
}

export default ApplyLeave;