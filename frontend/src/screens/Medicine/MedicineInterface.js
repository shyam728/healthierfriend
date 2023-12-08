
import { useState, useEffect } from "react";
import { display } from "@mui/system";
import {
  Avatar,
  Grid,
  TextField,
  Button,
  FormControl
 
} from "@mui/material";

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { makeStyles } from "@mui/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import { UploadFile } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { postData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "100%",
    background: "#dfe4ea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "60%",
    height: "auto",
    borderRadius: 10,
    background: "#fff",
    padding: 15,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function MedicineInterface() {
  var classes = useStyles();

  const [onGoing, setOnGoing] = useState('');

  const handleChange = (event) => {
    setOnGoing(event.target.value);
  };
 

  const [value, setValue] = React.useState(dayjs('2022-04-17'));



     



      







      const handleSubmit = async () => {
       
      }




  return (
    <div>
      <div className={classes.root}>
        <div className={classes.box}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <h2>Tracking The Medicience</h2>
            </Grid>
           

          

            <Grid item xs={6}>
              <TextField label="Medication Name" 
              fullWidth
               />

            </Grid>
            

            <Grid item xs={6}>
              <TextField label="Dose" fullWidth 
               
               />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Dose Unit" fullWidth 
               
               />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Frequency" fullWidth
               
               />
            </Grid>
            <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Start Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
              </Grid>

            <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="End Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
            </Grid>
           
          <Grid item xs={4}>
          <FormControl >
      <FormLabel id="demo-controlled-radio-buttons-group">OnGoing</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={onGoing}
        onChange={handleChange}
        sx={{flexDirection:'row'}}
      >
        <FormControlLabel value="true" control={<Radio />} label="Runing" />
        <FormControlLabel value="false" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
          </Grid>
         

          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" >
              Reset
            </Button>
          </Grid>

          </Grid>
        </div>
      </div>
    </div>
  );
}
