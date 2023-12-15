import { useState } from "react";
import Editor from "../../components/Editor";
import Select from "react-select";

const departmentsOptions = [
  { value: "UX/UI Design", label: "UX/UI Design" },
  { value: "Front End Development", label: "Front End Development" },
  { value: "Back End Development", label: "Back End Development" },
  { value: "QA", label: "QA" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
  { value: "Mobile Development", label: "Mobile Development" },
  { value: "Unity Development", label: "Unity Development" },
  // Add more options as needed
];
const tagOptions = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
  // Add more options as needed
];

const Form = () => {
  const [postData, setPostData] = useState({});
  const handleEditorData = (data) => {
    console.log("content", data);
    setPostData((prev) => ({ ...prev, ...data }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (data, name) => {
    setPostData((prev) => ({ ...prev, [name]: data }));
  };

  return (
    <div className="flex w-full py-10 justify-center">
      <div className="w-full items-start max-w-5xl flex flex-col gap-3 ">
        <textarea
          rows={2}
          className="text-4xl font-bold w-full px-2 py-2 outline-none border-none"
          placeholder="Title..."
          name="title"
          onChange={handleChange}
        />
        <Select
          name="tag"
          placeholder="Select Tag"
          options={tagOptions}
          value={postData?.tag}
          onChange={(data) => handleSelect(data, "tag")}
          className="basic-multi-select w-2/4"
          classNamePrefix="Select Tag"
        />
        <Select
          name="departments"
          placeholder="Select Departments"
          isMulti
          options={departmentsOptions}
          value={postData?.departments}
          onChange={(data) => handleSelect(data, "departments")}
          className="basic-multi-select w-2/4"
          classNamePrefix="Select Departments"
        />
        <div className="w-full flex items-center max-w-5xl">
          <Editor handleChange={handleEditorData} />
        </div>
      </div>
    </div>
  );
};

export default Form;
