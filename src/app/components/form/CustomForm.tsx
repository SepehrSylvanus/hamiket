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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from "../customStyles/customStyles";
const CustomForm = () => {
  return (
    <div className={styles.container}>
      <form action={formUpload} className={styles.mainForm}>
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
