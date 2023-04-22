import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";

function CheckBox({onClick, title, value}) {
const [show, setShow] = useState(true)
  return (

    <>
    
        <div>
             <FormGroup>
            <FormControlLabel control={<Checkbox value={value} />} label={title}/>
            </FormGroup>
      </div>
      </>
        
  );
}

export default CheckBox;