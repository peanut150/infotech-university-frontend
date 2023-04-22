import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "./BackBtn";
import {Checkbox} from "@mui/material";

function CheckBox({onClick, title, value}) {
const [show, setShow] = useState(true)
  return (

    <>
    
        <div>
             <FormGroup sx={{height:"2rem"}}>
              <FormControlLabel   control={<Checkbox value={value} />} label={title}/>
            </FormGroup>
      </div>
      </>
        
  );
}

export default CheckBox;