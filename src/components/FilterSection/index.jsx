import React from "react";
// import filterIcon from "../../assets/images/FilterIcon.png"
// import filterIcon from "../../assets/images/FilterIcon.png"
import FilterListIcon from "@mui/icons-material/FilterList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//

const FilterSection = () => {
  return (
    <div className="w-[100%] bg-[#F9F9F9] flex justify-center ">
      <div className=" w-[80%] flex flex-col gap-3 justify-center  ">
        <div className="flex gap-3 justify-center bg-[#FFFFFF] border-2 items-center w-auto">
          {/* <img src={filterIcon} alt="" /> */}
          <div>
            <FilterListIcon />
          </div>
          <div className="flex items-center">
            <p>Filter</p>
          </div>
        </div>
        <div className="">
            <p className="text-[16px] text-[#424242] font-semibold">Selected Filters</p>
        </div>
        <div className="bg-[#FFF] w-[100%] rounded-[20px] h-max border-2">
          <div className="flex border-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
                
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />

              {/* <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
