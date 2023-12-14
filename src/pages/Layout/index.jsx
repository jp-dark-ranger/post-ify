import React, { useState } from 'react'
import PostCard from '../../components/PostCard';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import ProfileCard from '../../components/ProfileCard'
import Header from './../../components/Header/Header';
import FilterSection from '../../components/FilterSection';

const Layout = () => {

  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (
    <div>
      <div className='w-full flex'>
        <div className='w-[70%] h-full flex '>
          <div className='flex flex-col gap-2 '>
            {/* <PostCard/>
               <PostCard/> */}
            {cards.map(res => {
              return (
                <PostCard />
              )
            })}
          </div>
        </div>
        <div className='w-[30%]  justify-center flex'>
          
          {/* <div className='w-full'> */}
            {/* <Select>
              <MenuItem>

                <Checkbox />
                <ListItemText />
              </MenuItem>
            </Select> */}
          {/* </div> */}
          {/* <ProfileCard/> */}
          <FilterSection/>
        </div>
      </div>
    </div>

  )
}

export default Layout