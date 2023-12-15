import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import { DEFAULT_INITIAL_DATA } from './../../pages/ViewPost/index';

const emptyData = {
  time: new Date().getTime(),
  blocks: [],
};

const Editor = ({ readOnly = false, handleChange, data }) => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      readOnly: readOnly,
      autofocus: true,
      data: data && Object.keys(data).length ? data : readOnly? DEFAULT_INITIAL_DATA : emptyData,
      onChange: async () => {
        let content = await editor.saver.save();
        // console.log(content);
        handleChange && handleChange(content);
      },
      tools: {
        header: Header,
        code: CodeTool,
        embed: Embed,
        linkTool: {
          class: LinkTool,
          inlineToolbar: true,
          config: {
            // endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile(file) {
                console.log("upload image");
                return new Promise((resolve, reject) => {
                  try {
                    const blobURL = URL.createObjectURL(file); // Create a Blob URL

                    // Simulated delay to mimic an asynchronous upload process
                    setTimeout(() => {
                      resolve({ success: 1, file: { url: blobURL } });
                    }, 1000);
                  } catch (error) {
                    reject(error);
                  }
                });
              },
            },
          },
        },
      },
    });
  };

  // This will run only once
  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id="editorjs" className="w-full min-h-[100px]"></div>
    </>
  );
};

export default Editor;
