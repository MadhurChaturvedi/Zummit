import React, { useState } from "react";
import Main_Dashboard_img from "../../images/Main_Dashboard_img.png";
import EditIcon from "../../images/SVG_files/Edit_Icon_2.svg";
import DeleteIcon from "../../images/SVG_files/Delete_Icon.svg";

const Resources_Edit = () => {
  const [image, setImage] = useState(Main_Dashboard_img);
  const [lastImage, setLastImage] = useState();

  const handleChooseFile = () => {
    document.querySelector(".choose-file").click();
  };

  const handleFile = ({ target: { files } }) => {
    if (files.length > 0 && files[0]) {
      const newImage = URL.createObjectURL(files[0]);
      setImage(newImage);
      setLastImage(image);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="p-10 rounded-md bg-[#FDFEF1]  ">
        <div className="flex justify-end items-center">
          <div className="bg-[#B00202] rounded-md p-2">
            {/* Delete Icon */}
            <img src={DeleteIcon} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-xl  mb-10 font-medium">Edit Resources</h1>
          <div className="flex  gap-20 ">
            <div>
              <img
                src={image}
                className="admin-dashboard-article-img w-48 h-48 border rounded-md "
                alt=""
              />
              <div className="flex justify-center items-center my-5">
                <input
                  onChange={handleFile}
                  type="file"
                  accept="/image.png, /image.jpg, /image.jpeg "
                  className="choose-file hidden"
                />
                <button
                  onClick={handleChooseFile}
                  className="text-white rounded-md px-4 py-2 bg-[#00677F] "
                >
                  Change Photo
                </button>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex gap-4 mb-2">
                <h1>Edit Heading</h1>
                {/* Edit Icon 2*/}
                <img src={EditIcon} alt="" />
              </div>
              <input
                className="border p-2 w-[22rem] outline-none rounded-md"
                type="text"
              />
              <div className="flex gap-2 items-center mt-4 mb-2">
                <h1>Edit Body</h1>
                {/* Edit Icon 2 */}
                <img src={EditIcon} alt="" />
              </div>
              <textarea
                name=""
                className="h-[14rem] resize-none p-2 border outline-none w-[23rem] rounded-md "
                id=""
              ></textarea>
              <div className="flex justify-end gap-2 mt-4">
                <button className="rounded-md px-4 py-2 bg-[#FED365]">
                  Publish
                </button>
                <button className="rounded-md text-white px-4 py-2 bg-[#00677F]">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources_Edit;
