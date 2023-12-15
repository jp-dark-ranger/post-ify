import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import FilterSection from "../../components/FilterSection";
import { blogs } from "../../constants";

const Layout = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [edit, setEdit] = useState(false)

  const onOptionsButtonClick = () => {
    setEdit(edit => !edit)
  }
const [state, setState] = useState(blogs);
  const handleFilter = (data) => {
    const filteredData = blogs.filter((blog) =>
      data.some((item) => item.label === blog.department[0].label)
    );
    console.log("filteredData f1>>>", filteredData);
    if (data?.length && filteredData?.length) {
      setState(filteredData);
    } else if (!data?.length) {
      setState(blogs);
    } else if (data?.length && !filteredData?.length) {
      setState(filteredData);
    }
  };
  return (
    <div>
      <div className="w-full flex">
        <div className='w-[70%] flex  "bg-local h-[880px] flex-wrap overflow-auto'>
          <div className="flex flex-col gap-2 ">
            {state.map((res) => {
              return <PostCard date={new Date()}  title={res.title}  description={res.blocks[1].data.text}   department={res.department}  username={res.userName} />;
            })}
          </div>
        </div>
        <div className='w-[30%]  justify-center flex "bg-local h-[880px] flex-wrap overflow-auto'>
          <FilterSection handleFilter={handleFilter} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
