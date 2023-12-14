import React, { useState } from "react";

// import filterIcon from "../../assets/images/FilterIcon.png"
// import filterIcon from "../../assets/images/FilterIcon.png"
import FilterListIcon from "@mui/icons-material/FilterList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


//

const FilterSection = () => {

  const [selected, setSelected] = useState(['UX/UI Design', 'Front End Development', 'Back End Development', 'QA', 'Sales', 'Marketing', 'Mobile Development', 'Unity Development'])
  const [tags, setTags] = useState(['High', 'Medium',  'Low'])

  return (
    // <div className="w-[100%] bg-[#F9F9F9] flex justify-center ">
    //   <div className=" w-[80%] flex flex-col gap-3 justify-center  ">
    //     <div className="flex gap-3 justify-center bg-[#FFFFFF] border-2 items-center w-auto">
    //       {/* <img src={filterIcon} alt="" /> */}
    //       <div>
    //         <FilterListIcon />
    //       </div>
    //       <div className="flex items-center">
    //         <p>Filter</p>
    //       </div>
    //     </div>
    //     <div className="p">
    //         <p className="text-[16px] text-[#424242] font-semibold">Selected Filters</p>
    //     </div>
    //     <div className="bg-[#FFF] w-[100%] rounded-[20px] h-max border-2">
    //       <div className="flex border-2">
    //         <FormGroup>
    //           <FormControlLabel
    //             control={<Checkbox defaultChecked />}
    //             label="Label"

    //           />
    //           <FormControlLabel
    //             control={<Checkbox defaultChecked />}
    //             label="Label"
    //           />

    //           {/* <FormControlLabel required control={<Checkbox />} label="Required" />
    //   <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    //         </FormGroup>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div style={{ display: 'flex', backgroundColor: '#F9F9F9', width: '100%', paddingTop: '24px', paddingLeft: '42px', paddingRight: '42px' }}>
      <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#F9F9F9', flexDirection: 'column' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{
            display: 'flex', padding: '16px 20px 16px 16px', backgroundColor: 'white', height: ' fit-content', justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            gap: '12px',
          }}>
            <FilterListIcon width="18" height="14" /><p className="text-base  font-semibold">Filter</p>
          </div>

        </div>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap:'8px', marginTop:'24px'}}>
          <div style={{
            display: 'flex', padding: '16px 20px 16px 16px', backgroundColor: 'white', height: ' fit-content', justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            gap: '12px',
            width: 'fit-content'
          }}>
            <p className="text-base  font-semibold">Selected Filter</p>
          </div> 
          <div className="flex bg-white w-full rounded-[20px] p-4">
            <FormGroup>
              {selected.map((res) => {
                return (
                  <FormControlLabel control={<Checkbox defaultChecked />} label={res} />
                )
              })}

            </FormGroup>
          </div>

        </div>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap:'8px' , marginTop:'16px'}}>
          <div style={{
            display: 'flex', padding: '16px 20px 16px 16px', backgroundColor: 'white', height: ' fit-content', justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            gap: '12px',
            width: 'fit-content'
          }}>
            <p className="text-base  font-semibold">Tags</p>
          </div> 
          <div className="flex bg-white w-full rounded-[20px] p-4">
            <FormGroup>
              {tags.map((res) => {
                return (
                  <FormControlLabel control={<Checkbox defaultChecked />} label={res} />
                )
              })}

            </FormGroup>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FilterSection;
