import { useState, useEffect } from "react";
import Editor from "../../components/Editor";
import Select from "react-select";
import { saveBlog } from "../../redux/slices/blogsSlice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

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
const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      id: "7tHbQCi7bG",
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
    {
      id: "muwM4e-4Ra",
      type: "code",
      data: {
        code: 'import React, { useEffect, useState } from "react";\n\nconst LinkPreview = () => {\n  const [previewData, setPreviewData] = useState(null);\n\n  const handlePaste = async (event) => {\n    const pastedData = event.clipboardData.getData("text");\n    const urlRegex = /(http[s]?:\\/\\/[^\\s]+)/gi;\n    const matchedUrls = pastedData.match(urlRegex);\n\n    if (matchedUrls && matchedUrls.length > 0) {\n      const url = matchedUrls[0]; // Extract the first URL from the pasted content\n      await fetchLinkPreview(url);\n    }\n  };\n\n  const fetchLinkPreview = async (url) => {\n    try {\n      const apiKey = "0a46cbbe-928d-4982-a1b8-b072b3130437"; // Replace with your API key\n      const apiUrl = `https://opengraph.io/api/1.1/site/${encodeURIComponent(\n        url\n      )}?app_id=${apiKey}`;\n\n      const response = await fetch(apiUrl);\n      const data = await response.json();\n\n      if (data && data.hybridGraph) {\n        setPreviewData(data.hybridGraph);\n      } else {\n        console.error("No link preview found for the provided URL.");\n      }\n    } catch (error) {\n      console.error("Error fetching link preview:", error);\n    }\n  };\n\n  useEffect(()=>console.log(previewData,\'\'))\n  return (\n    <div>\n      <input type="text" onPaste={handlePaste} placeholder="Paste a URL here" />\n\n      {previewData && (\n        <div>\n          <h3>Link Preview:</h3>\n          <div>\n            {previewData.title && <h4>{previewData.title}</h4>}\n            {previewData.description && <p>{previewData.description}</p>}\n            {previewData.image && (\n              <img src={previewData.image} alt="Link Preview" />\n            )}\n            <a href={previewData.url} target="_blank" rel="noopener noreferrer">\n              Go to Link\n            </a>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default LinkPreview;\n',
      },
    },
  ],
};

const Form = () => {
  const [postData, setPostData] = useState({});
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const flag = query.get("flag");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveBlog(postData));
  }, [postData]);

  const handleEditorData = (data) => {
    console.log("content", data);
    setPostData((prev) => ({ ...prev, ...data }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-full py-10 justify-center">
      <div className="w-full items-start max-w-5xl flex flex-col gap-3 ">
        <textarea
          rows={2}
          className="font-bold w-full px-2 py-2 outline-none border-none font-sans  text-black text-5xl not-italic leading-[150%] tracking-[0.96px]"
          placeholder="Title..."
          name="title"
          onChange={handleChange}
        />
        {/* <Select
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
        /> */}
        <div className="w-full flex items-center max-w-5xl">
          <Editor
            handleChange={handleEditorData}
            data={flag === "edit" ? DEFAULT_INITIAL_DATA : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
