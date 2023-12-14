import React, { useState } from 'react'
import PostCard from '../../components/PostCard';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import ProfileCard from '../../components/ProfileCard'
import Header from './../../components/Header/Header';

const Layout = () => {

  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (
    <div>
      
        {/* <Header /> */}
        <div className='w-full flex justify-center'>
          <div className='w-[60%] h-full flex justify-center'>
            <div className='w-[80%] flex flex-col gap-2 '>
              {/* <PostCard/>
               <PostCard/> */}
              {cards.map(res => {
                return (
                  <PostCard  />
                )
              })}
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='w-[328px]'>
              <Select sx={{ width: 328 }}>
                <MenuItem>

                  <Checkbox />
                  <ListItemText />
                </MenuItem>

              </Select>

            </div>
            {/* <ProfileCard/> */}
          </div>
        </div>
    </div>

  )
}

export default Layout