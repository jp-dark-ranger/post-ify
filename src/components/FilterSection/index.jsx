import React, { useState, useEffect } from "react";

// import filterIcon from "../../assets/images/FilterIcon.png"
// import filterIcon from "../../assets/images/FilterIcon.png"
import { pink, blue } from '@mui/material/colors';
import FilterListIcon from "@mui/icons-material/FilterList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


//

const FilterSection = ({handleFilter}) => {

  const [selected, setSelected] = useState([])
  const [tags, setTags] = useState([{ tag: 'High', color: '#FF6C6C', isChecked: false }, { tag: 'Medium', color: '#FFBC6C', isChecked: false }, { tag: 'Low', color: '#6CFF84', isChecked: false }])
  const [department, setDepartment] = useState([{ label: 'UX/UI Design', isChecked: false }, { label: 'Front End Development', isChecked: false }, { label: 'Back End Development', isChecked: false }, { label: 'QA', isChecked: false }, { label: 'Sales', isChecked: false }, { label: 'Marketing', isChecked: false }, { label: 'Mobile Development', isChecked: false }, { label: 'Unity Development', isChecked: false }])
  
  const handelChecked = (e) => {

    if (!selected.some((res) => res.label == e.target.name)) {

      setSelected([...selected, { label: e.target.name, isChecked: true }])
      setDepartment(prev => {
        return prev.filter((res) => res.label !== e.target.name)
      })
    }
  }

  const handelUnChecked = (e) => {
    if (!department.some((res) => res.label == e.target.name)) {
      setDepartment([...department, { label: e.target.name, isChecked: false }])
      setSelected(prev => {
        return prev.filter((res) => res.label !== e.target.name)
      })
     
    }
  }
  useEffect(() => {
  handleFilter(selected)
},[selected])

  return (
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
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', marginTop: '24px' }}>
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
                  <FormControlLabel key={res + '1'} onChange={handelUnChecked} control={<Checkbox defaultChecked sx={{
                    color: '#804EF6',
                    '&.Mui-checked': {
                      color: '#804EF6',
                    },
                  }} />} label={res.label} name={res.label} />
                )
              })}

            </FormGroup>
          </div>

        </div>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          <div style={{
            display: 'flex', padding: '16px 20px 16px 16px', backgroundColor: 'white', height: ' fit-content', justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            gap: '12px',
            width: 'fit-content'
          }}>
            <p className="text-base  font-semibold">Department</p>
          </div>
          <div className="flex bg-white w-full rounded-[20px] p-4">
            <FormGroup>
              {department.map((res) => {
                return (
                  <FormControlLabel   key={res + '2'} className={`${res.isChecked ? "block" : 'hidden'}`} onChange={handelChecked} control={<Checkbox checked={res.isChecked} sx={{
                    color: '#804EF6',
                    '&.Mui-checked': {
                      color: '#804EF6',
                    },
                  }} />} label={res.label} name={res.label} />
                )
              })}

            </FormGroup>
          </div>

        </div>
        {/* <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
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
                  <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: res.color,
                    '&.Mui-checked': {
                      color: res.color,
                    },
                  }} />} label={res.tag} />
                )
              })}

            </FormGroup>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default FilterSection;
