import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Editor from "../../components/Editor";

const mockData = {
  userName: "Harish B",
  time: "POSTED-AT",
  like: 12000,
  comment: 12000,
};

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  // blocks: [
  //   {
  //     type: "header",
  //     data: {
  //       text: "This is my awesome editor!",
  //       level: 1,
  //     },
  //   },
  // ],
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
      id: "j2wuMW8zaU",
      type: "paragraph",
      data: {
        text: "usdhabjsfjsj fjajs fjbj bfjb jkakbjhsbjfb jabsfjbjskfjkhbajf jbs jfhbajkbfjabjkfbjkabf jkhabjkfbhakjhfjk bahfjbjsabfjabfjabjfajbf jkabfjbajfbjbfjbajfbjabf jbJ B BJB JBFJ ABJ FBJAB JBF JKABJF BAJK BFJAB FJKAB JKFBAJKBFKJA BFKJA HBJKF JAB FJBWA JBFW FAI D;ILXanLKjfb luiwflikun lWKUBFKWAB FJB WAJBFJKW AKLDJM;LInlkfnak",
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

const ViewPost = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full flex flex-col max-w-5xl gap-10">
        <h1 className="font-sans">
          The Ancient and Modern Wonders of Solo Travel in Tokyo
        </h1>
        <div className="flex gap-3 items-center">
          <div className="rounded-full flex justify-center items-center w-14 aspect-square text-4xl bg-[#D9D9D9]">
            {mockData.userName.at(0)}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-2xl">{mockData.userName}</span>
            <span className="text-sm">{mockData.time}</span>
          </div>
        </div>
        <div className="flex gap-6 items-center p-2 border-b-2 border-t-2 border-[#eee]">
          <span className="flex gap-2 ">
            <FavoriteBorderIcon />
            <span className="text-sm">{mockData.like}</span>
          </span>
          <span className="flex gap-2 ">
            <ModeCommentOutlinedIcon />
            <span className="text-sm">{mockData.comment}</span>
          </span>
        </div>
        <Editor readOnly={true} data={DEFAULT_INITIAL_DATA} />
      </div>
    </div>
  );
};

export default ViewPost;
