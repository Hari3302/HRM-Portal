import React, { useState, useEffect } from 'react';
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import useAxios from '../axios';
import PrimarySearchAppBar from '../MajorComponents/Navbar';
import AddIcon from '@mui/icons-material/Add';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import "../Styles/Dash.css"
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
// import AddForm from '../Forms/AddHRForm';
import Addbutton from '../Forms/AddHRForm';
import CompanyAddForm from '../Forms/CompanyAddForm';
import { useLocation } from 'react-router-dom';


const Dashboard = () => {
  const [name, setname] = useState("");
  const [dataGet, setDataGet] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editedData, setEditedData] = useState({
    company_name: '',
    company_emailid: '',
    phnumber: '',
    no_of_employee: ''
  });



  const datalocal = JSON.parse(localStorage.getItem("user"));
  const axiosData = useAxios(); 

const options = ['Company Name', 'Company Id'];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

 const location=useLocation("");


  useEffect(() => {
    if (datalocal !== null || datalocal !== "") {
      setname(datalocal.user_name);
    }
    axiosData.get(`students`).then((response) => {
      setDataGet(response.data);
    });
  }, []);


  

  const handleDelete = async(namedelete) => {
    await axiosData.delete(`students/delete/${namedelete}`).then(() => {
      
      alert('Deleted successfully');
     try{
      axiosData.get(`students`).then((refreshedData) => {
        setDataGet(refreshedData.data);
      });
     }catch(err){

     }
    }).catch((error) => {
      console.error('Error deleting:', error);
    });
  };
const search=(onChange)=>{

}

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditedData({
      company_name: student.company_name,
      company_emailid: student.company_emailid,
      phnumber: student.phnumber,
      no_of_employee: student.no_of_employee
    });
    setOpenEditDialog(true);
  };

  const handleEditSave = () => {
    console.log(selectedStudent);
    axiosData.put(`students/${selectedStudent._id}`, editedData).then(() => {
      alert('Edited successfully');
      axiosData.get(`students`).then((refreshedData) => {
        setDataGet(refreshedData.data);
        alert('Updated  successfully');
      });
      
      setOpenEditDialog(false);
    }).catch((error) => {
      console.error('Error editing:', error);
    });
  };

  const handleEditInputChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  return (
    <div>
      <PrimarySearchAppBar  head={location.state.lable} />
      <div>
      <div className='aboveTable'>
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
        renderInput={(params) => <TextField {...params} label="Filters" />}
      />


<TextField
      variant="outlined"
      label="Search"
      onChange={search}
      className='searches'
      sx={{ width: 700 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />

<CompanyAddForm/>
    </div>

        
      </div>
<div className='tableBox'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 ,borderRadius:"20%"}} aria-label="customized table">
          <TableHead sx={{backgroundColor:"#1976d2"}}>
            <TableRow >
              <TableCell className='rowscells' align="left">Company Name</TableCell>
              <TableCell className='rowscells' align="Center">Company ID </TableCell>
              <TableCell className='rowscells' align="Center">Contact No </TableCell>
              <TableCell className='rowscells' align="Center">Action</TableCell>
              <TableCell className='rowscells' align="Center">Add Employees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataGet.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='answers' align="left">{row.company_name}</TableCell>
                <TableCell className='answers' align="Center">{row.company_emailid}</TableCell>
                <TableCell className='answers' align="Center">{row.phnumber}</TableCell>
                <TableCell className='answers' align="Center">
                  <div className='actions'>
                <EditIcon sx={{ color: 'white' ,backgroundColor:"green",borderRadius:"50%",padding:"5px"}} onClick={() => { handleEditClick(row) }} />

               
                  <DeleteForeverRoundedIcon   sx={{ color: 'white' ,backgroundColor:"red",borderRadius:"50%",padding:"5px"}} onClick={() => { handleDelete(row._id) }} />
                  
                  </div>
                   </TableCell>

                   <TableCell className='answers' align="Center"><Addbutton
                   company_name={row.company_name}/></TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle><Typography className='heads' variant='h6'>Edit Company Details</Typography></DialogTitle>
        <DialogContent>
          <div className='editForm'>
          <TextField
            label="First Name"
            name="user_name"
            value={editedData.company_name}
            onChange={handleEditInputChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="emailid"
            value={editedData.company_emailid}
            onChange={handleEditInputChange}
            fullWidth
          />
          <TextField
            label="Contact No"
            name="phnumber"
            value={editedData.phnumber}
            onChange={handleEditInputChange}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            value={editedData.no_of_employee}
            onChange={handleEditInputChange}
            fullWidth
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;






