import React, { useEffect, useState } from "react";
import uploadImg from "../../images/Upload_file.png";

const TherapistPop = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showTherapistPop, setShowTherapistPop] = useState(false);
  const [therapistCount, setTherapistCount] = useState(3);
  const [name, setName] = useState("");
  const [charges, setCharges] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");
  const [imageerror, setImageError] = useState("");

  const handleSubmission = (e) => {
    if (e) e.preventDefault();
    {
      if (name.trim() === "") {
        setError("Name can't be empty");
        return;
      }
      if (charges.trim() === "") {
        setError("Charge can't be empty");
        return;
      }
      if (expertise.trim() === "") {
        setError("Expertise can't be empty");
        return;
      }
      if (experience.trim() === "") {
        setError("Experience can't be empty");
        return;
      }
      if (charges.trim() === "") {
        setError("Charge can't be empty");
        return;
      }
      if (!image) {
        setImageError("Please Upload Your Image");
        return;
      }
      setError("");
      setImageError("");
      setShowTherapistPop(false);
    }
  };
  const updateTherapistCount = () => {
    if (therapistCount <= 2) {
      setShowTherapistPop(true);
    } else setShowTherapistPop(false);
  };
  useEffect(() => {
    updateTherapistCount();
  }, [therapistCount]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isDraggingOver) {
      setIsDraggingOver(true);
    }
  };
  const handleDragLeave = () => setIsDraggingOver(false);

  return (
    <>
      {showTherapistPop && (
        <div className="fixed bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center">
          <div className="absolute  top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 p-10 bg-[#4DB3CB] h-[80vh] w-[80vw] shadow-xl rounded-md">
          
            <h1 className="font-semibold mb-2 text-3xl">
              Please Enter Your Details
            </h1>
            <form>
              <div className="flex gap-5">
                {/* left */}
                <div className="w-64">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-48 h-48 mt-5 rounded-full text-xs overflow-hidden cursor-pointer border-4 flex flex-col justify-center items-center border-dashed bg-[#FDFEE6] hover:bg-[#fcfced] ${
                        image ? "border-[#35ff89]" : " border-[#5891ed]"
                      }`}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={() =>
                        document.querySelector(".input-field").click()
                      }
                    >
                      <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        className="input-field hidden"
                        onChange={({ target: { files } }) => {
                          if (files.length > 0 && files[0]) {
                            setImage(URL.createObjectURL(files[0]));
                            setFileName(files[0].name);
                          } else {
                            setFileName("");
                            setImage(null);
                          }
                        }}
                      />

                      <img
                        src={image ? image : uploadImg}
                        className={`${
                          image
                            ? "w-full object-cover object-center"
                            : "w-32 animate-bounce animate-[bounce_2.5s_ease-in-out_infinite]"
                        }`}
                        alt=""
                      />
                      <p>{image ? fileName : "Drag or Drop Your Picture"}</p>
                    </div>
                    <div className="flex justify-center w-full  mt-5">
                      <p className="text-red-500 font-medium ">
                        {imageerror} 
                      </p>
                      {fileName && <p className="font-medium text-center bg-white rounded-md px-2 py-1">{fileName}</p>}
                    </div>
                  </div>
                </div>

                {/* right */}
                <div>
                  <div className="text-black text-sm flex flex-wrap gap-10 pt-5  ">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-60 h-10 rounded-md p-2 outline-none text-black bg-cyan-100 "
                      />
                    </div>

                    <div>
                      <select
                        id="language"
                        className="w-60 h-10 rounded-md p-2 outline-none text-black bg-cyan-100 "
                      >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="number"
                        required
                        placeholder="Charges Per Session"
                        value={charges}
                        onChange={(e) => setCharges(e.target.value)}
                        className=" h-10 rounded-md p-2 outline-none text-black bg-cyan-100 "
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Please Share Your Expertise"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}
                        className=" h-40 w-60 rounded-md p-2 outline-none text-black bg-cyan-100 resize-none"
                        name=""
                        id=""
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter Your Experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="h-10 rounded-md p-2 outline-none text-black bg-cyan-100 "
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-2 ">
                    <p className="font-medium text-red-500">{error}</p>
                    <button
                      onClick={handleSubmission}
                      className="bg-yellow p-2 rounded-md font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TherapistPop;
