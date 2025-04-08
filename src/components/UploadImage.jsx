import React from "react";

const UploadImage = ({uploadedImageHandler}) => {

    const showImangeHandler = (e) => {
        const file= e.target.files[0]; // Get the selected file
        if(file){
            uploadedImageHandler(file); // Pass the file to the parent component
        }
    }

  return (
    <div className=" text-black bg-white shadow-md  shadow-[#f7a5e1] rounded-2xl p-6 w-96">
      <label
        htmlFor="fileInput"
        className="block text-center hover:border-[#b74e9b] transition-all w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg"
      >
        <p className="text-gray-400 p-3">Click or drag to upload your image</p>
        <input type="file" id="fileInput" className="hidden" onChange={showImangeHandler} />
      </label>
    </div>
  );
};

export default UploadImage;
