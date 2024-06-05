import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs"; // Import dayjs library
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../Styles/LeaveBtn.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useAxios from "../axios";
import { useLocation } from "react-router-dom";

function Demo() {
  const [open, setOpen] = useState(false);
  const [name,setname]=useState()
  const [formData, setFormData] = useState({
    fromDate: null,
    toDate: null,
    reason: "",
    type_of_leave: "",
    user_name:"",
  });


  
  const dataAxios = useAxios();

  const submit=useLocation();
  const applyLeave=async()=>{
    
    console.log("object",name,)
    try{
const datas =await dataAxios.post("/leaveformdetails",

  { leavefrom:formData.fromDate,
    leaveto:formData.toDate,
    reason_of_leave:formData.reason,
    type_of_leave:formData.type_of_leave,
    user_type:"employee",
    user_name:formData.user_name
  })

console.log("object",datas) 
alert("You have applied a leave")  


}catch(err){
        console.log(err)
    }
  }
  const [click, setClick] = useState(false);

  const functionalOpenPage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    console.log("Form Data:", formData);
    setClick(true);
    setOpen(false); // Close the dialog after "yes" button is clicked
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });

    const parsedDate = dayjs(date);
    console.log(parsedDate.format("YYYY-MM-DD")  );
  };

  const handleMethod = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setClick(false);
  };
  console.log("full", formData);

  return (
    <div className="leave_form">  
      <Button onClick={functionalOpenPage} color="primary" variant="contained">
        Apply leave
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <div style={{ padding: "20px" }}>
          <DialogTitle
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: "30px",
              boxShadow: "inherit",
              background: "#f5e79b",
            }}
          >
            Leave Request Form
          </DialogTitle>
          <div className="Stack-method">
            <div>
              <Typography> Leave From</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                dateLibInstance={dayjs}
                fullWidth
                className="from-class"
              >
                <DatePicker
                  value={formData.fromDate}
                  onChange={(date) => handleDateChange(date, "fromDate")}
                />
              </LocalizationProvider>
            </div>
            <div>
              <Typography>TO</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                dateLibInstance={dayjs}
                fullWidth
                className="to-class"
              >
                <DatePicker
                  value={formData.toDate}
                  onChange={(date) => handleDateChange(date, "toDate")}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Typography>Reason</Typography>
            <TextField
              name="reason"
              className="resson"
              label="Reason only"
              multiline
              rows={3}
              fullWidth
              value={formData.reason}
              onChange={handleChange}
            />
            <div style={{ marginTop: "20px" }}>
            <Typography>Confirm User Name</Typography>
            <TextField
              name="user_name"
              className="resson"
              label="Reason only"
              multiline
              rows={3}
              fullWidth
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Typography>Type of Leave </Typography>
            <Select
              fullWidth
              className="select-dropdown"
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={formData.type_of_leave}
              name="type_of_leave"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select one</em>
              </MenuItem>
              <MenuItem value="Sick Leave">
              Sick Leave
              </MenuItem>
              <MenuItem value="Casual Leave">
              Casual Leave
              </MenuItem>
              <MenuItem value="Pay Leave">
              Pay Leave
              </MenuItem>
            </Select>
          </div>
          <DialogActions style={{ marginTop: "20px" }}>
            <Button  onClick={()=>{applyLeave() }} color="primary" variant="outlined">
              Apply leave
            </Button>
            <Button onClick={handleClose} color="error" variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      <Snackbar open={click} autoHideDuration={6000} onClose={handleMethod}>
        <Alert
          onClose={handleMethod}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully Submitted!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Demo;