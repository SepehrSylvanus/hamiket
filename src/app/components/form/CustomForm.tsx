"use client";
import styles from "./customForm.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { formUpload } from "@/app/actions/formActions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "../customStyles/customStyles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/lib/redux/usersSlice";
import { Users } from "../../../../types";

const CustomForm = () => {
  const dispatch = useDispatch();
const users = useSelector((state: Users) => state.users)
  useEffect(()=>{
console.log(users)
  }, [users])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const data = new FormData(formElement);

    const formDate: Users = {
      profilePic: (data.get("profilePic") as File).name,
      name: data.get("name") as string,
      gender: data.get("gender") as string,
      birthDate: data.get("birthDate") as string,
      age: data.get("age") as string,
    };

    dispatch(addUser(formDate));
  };

  return (
    <div className={styles.container}>
      <form
        action={formUpload}
/**
 * you can use redux with unhiding the onSubmit below
 * but after server action (new next 14 feature for handeling send
 * data to backend) won't work and we have to write another logic for sending data
 * to backend
 * So I decide to use server actions and read table data from back 
 * instead of using redux
 */
        
        // onSubmit={handleSubmit}
        className={styles.mainForm}
      >
        <FormControl>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput name="profilePic" type="file" />
          </Button>
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            name="name"
            label="نام"
            variant="outlined"
          />
        </FormControl>

        <Divider />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="زن" />
            <FormControlLabel value="male" control={<Radio />} label="مرد" />
          </RadioGroup>
        </FormControl>

        <Divider />
        <FormControl>
          <DatePicker name="birthDate" label="تاریخ تولد خود را انتخاب کنید" />
        </FormControl>

        <Divider />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            name="age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
