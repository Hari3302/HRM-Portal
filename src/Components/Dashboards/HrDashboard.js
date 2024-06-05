import React from "react";
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
import AddEmployee from "../Forms/AddEmployees";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import useAxios from "../axios";
import AddEmployeeManager from "../Forms/AddEmployeManger";
import { useLocation } from "react-router-dom";
// Custom styled Paper component

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [dataGet, setDataGet] = useState([]);

  const [empmanagerdataGet, setEmpmanagerdataGet] = useState([]);

  const axiosData = useAxios();
 const location=useLocation()
  const values = async () => {
    await axiosData.get(`empdetails`).then((response) => {
      setDataGet(response.data);
    });
  };

  const managervalues = async () => {
    try {
      const response = await axiosData.get(`empmanagerdetails`);
      if (response.data) {
        setEmpmanagerdataGet(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    managervalues();
    values();
  }, []);

  const options = ["Employees", "Employee Manager"];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  // Dummy data for number of employees and managers
  const numberOfEmployees = 100;
  const numberOfManagers = 10;

  const search = (onChange) => {};
  return (
    <>
      <PrimarySearchAppBar head={location.state.lable}/>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <CustomPaper >
              <Typography variant="h5" gutterBottom>
                HR Dashboard
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
            <CustomPaper className="boxer">
              <Typography variant="h6" gutterBottom>
                Number of Employee Managers
              </Typography>
              <Typography variant="h3">{numberOfManagers}</Typography>
            </CustomPaper>
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
            
            <AddEmployeeManager />
          </div>
        </div>

        {value === "Employees" ? (
          <>
            <div className="tableshead">
              <Typography  variant="h6">Employee Details</Typography>
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
                        Employee Name
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Employee ID{" "}
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Contact No{" "}
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Action
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        View More
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
                        <TableCell className="answers" align="Center">
                          {row.emailid}
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.phone_number}
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          <div className="actions">
                            <EditIcon
                              sx={{
                                color: "white",
                                backgroundColor: "green",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            />

                            <DeleteForeverRoundedIcon
                              sx={{
                                color: "white",
                                backgroundColor: "red",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            />
                          </div>
                        </TableCell>

                        <TableCell className="answers" align="Center">
                        <Button variant="outlined">View More</Button>
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
              <Typography variant="h6">Employee Manager Details</Typography>
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
                        EmployeeManger Name
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        EmployeeManger ID{" "}
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Contact No{" "}
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                        Action
                      </TableCell>
                      <TableCell className="rowscells" align="Center">
                       Add Employees
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {empmanagerdataGet.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="answers" align="left">
                          {row.user_name}
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.emailid}
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          {row.phone_number}
                        </TableCell>
                        <TableCell className="answers" align="Center">
                          <div className="actions">
                            <EditIcon
                              sx={{
                                color: "white",
                                backgroundColor: "green",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            />

                            <DeleteForeverRoundedIcon
                              sx={{
                                color: "white",
                                backgroundColor: "red",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            />
                          </div>
                        </TableCell>

                        <TableCell className="answers" align="Center">
                          
                          <AddEmployee />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
