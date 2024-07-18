import React, { useState } from "react";
import Author_img from "../../images/Dashboard-Author-img.png";
import DeleteIcon from "../../images/SVG_files/Delete_Icon_Gray.svg";
import PenIcon from "../../images/SVG_files/Pen_Icon.svg";

const Add_New_Articles = () => {
  const [image, setImage] = useState(Author_img);
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
    <div className="mx-10 my-5">
      <div className="w-[90%]">
        <h1 className="text-[#00677F] mb-5 text-ellipsis whitespace-nowrap overflow-hidden text-[1.6rem]">
          Resources/ Eu nulla nulla risus adipiscing mus risus non pellentesque
          integer.
        </h1>
        <div className="bg-[#FDFEF1] py-5 px-14 rounded-md">
          <div className="flex justify-end gap-2 text-sm mb-4">
            <button className="border border-[#00677F] px-4 rounded-md text-[#00677F]">
              Save
            </button>
            <button className="bg-[#00677F] text-white px-4 py-1 rounded-md ">
              Publish
            </button>
          </div>
          <div className="flex px-4 bg-white gap-40 items-center py-2 rounded-md border border-[#787579]">
            <h1>Author</h1>
            <input
              type="text"
              className="rounded-md w-full bg-[#FDFEF1] px-2 py-1 outline-none border"
              value={"Nirmal"}
            />
          </div>
          <div className="bg-white mt-4 p-5 border border-[#787579] rounded-md">
            <div className="flex justify-end items-center">
              {/* Delete Icon */}
              <img src={DeleteIcon} alt="" />
            </div>
            <h1 className="mt-5 mb-2 font-medium">
              Eu nulla nulla risus adipiscing mus risus non pellentesque
              integer.
            </h1>
            <div className="relative">
              <img src={image} alt="" />
              <input
                type="file"
                onChange={handleFile}
                className="choose-file hidden "
              />
              <div
                onClick={handleChooseFile}
                className="absolute cursor-pointer right-0 bottom-0 rounded-full p-2 bg-white "
              >
                {/* Pen Icon */}
                <img src={PenIcon} alt="" />
              </div>
            </div>
            <p className="my-4 text-sm pl-2">
              Nisi maecenas massa vulputate varius sed bibendum viverra id.
              Hendrerit id feugiat semper congue. Ac purus eu in mauris euismod.
              Felis volutpat sit in tellus morbi. Ut tortor curabitur risus eu a
              convallis. Nisl aliquet cursus morbi tincidunt. Purus adipiscing
              vitae nam pellentesque quis lorem vel. Interdum mattis integer
              lorem ut in. Facilisis volutpat tortor viverra faucibus dictum
              nunc. Elit iaculis mauris morbi feugiat vitae hac sagittis
              dignissim. Tincidunt mi massa malesuada vulputate scelerisque
              cursus. Consectetur imperdiet odio interdum interdum. Eu quis
              feugiat quisque sagittis. In sit sit eget mattis tortor. Phasellus
              id aliquam at auctor lacus ultricies. Amet nibh ut amet purus sed.
              Purus odio nunc lorem viverra eget. Sed neque duis aenean suscipit
              posuere varius. Vitae auctor lobortis blandit est ut tortor.
              Ultrices arcu augue massa fusce orci. Justo tellus duis aliquam in
              sodales sem urna eleifend tincidunt. Feugiat sit adipiscing
              vestibulum euismod. Cras sed ut luctus ornare phasellus faucibus
              sagittis. Nisi maecenas massa vulputate varius sed bibendum
              viverra id. Hendrerit id feugiat semper congue. Ac purus eu in
              mauris euismod. Felis volutpat sit in tellus morbi. Ut tortor
              curabitur risus eu a convallis. Nisl aliquet cursus morbi
              tincidunt. Purus adipiscing vitae nam pellentesque quis lorem vel.
              Interdum mattis integer lorem ut in. Facilisis volutpat tortor
              viverra faucibus dictum nunc. Elit iaculis mauris morbi feugiat
              vitae hac sagittis dignissim. Tincidunt mi massa malesuada
              vulputate scelerisque cursus. Consectetur imperdiet odio interdum
              interdum. Eu quis feugiat quisque sagittis. In sit sit eget mattis
              tortor. Phasellus id aliquam at auctor lacus ultricies. Amet nibh
              ut amet purus sed. Purus odio nunc lorem viverra eget. Sed neque
              duis aenean suscipit posuere varius. Vitae auctor lobortis blandit
              est ut tortor. Ultrices arcu augue massa fusce orci. Justo tellus
              duis aliquam in sodales sem urna eleifend tincidunt. Feugiat sit
              adipiscing vestibulum euismod. Cras sed ut luctus ornare phasellus
              faucibus sagittis.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Add_New_Articles;
