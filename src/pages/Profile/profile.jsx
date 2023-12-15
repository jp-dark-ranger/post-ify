import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import ProfileCard from "../../components/ProfileCard";
import FilterSection from "../../components/FilterSection";

const Profile = () => {
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
        <div>
            <div className="w-full flex">
                <div className='w-[70%] flex  "bg-local h-[880px] flex-wrap overflow-auto'>
                    <div className="flex flex-col gap-2 ">
                        {cards.map((res) => {
                            return <PostCard />;
                        })}
                    </div>
                </div>
                <div className='w-[30%]  justify-center flex "bg-local h-[880px] flex-wrap overflow-auto'>
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
};

export default Profile;