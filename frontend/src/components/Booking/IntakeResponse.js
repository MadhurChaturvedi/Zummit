import React, {useState} from 'react'
import UserSidebar from "../User/UserSidebar";

const IntakeResponse = () => {
    const [IntakeForm, setIntakeForm] = useState({
        name: "",
        DOB: "",
        age: null
    });

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setIntakeForm((obj) => ({...obj, [name]: value}))
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(IntakeForm)
    }
    return (
        <div className="flex gap-[50px] bg-[#F2FCFF]">
            <UserSidebar />
            <div className="w-[100%] ">
                <h1 className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mt-[2vh] mb-[2vh] ">
                    Therapists/Dr. Sundhari Prakhashan
                </h1>
                <div className="w-[80%] max-w-[932px] min-w-[627px] h-fit bg-white px-[95px] py-[45px] mx-[51px] my-[32px]">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="text-[22px] font-semibold">Intake response</h1>
                        <p className="text-[14px] font-medium">Help us to know you better by filling this intake form</p>
                        <form className="w-[100%] flex flex-col gap-[50px]"
                        onSubmit={handleFormSubmit}>
                            <div className="w-[520px] mx-auto flex flex-col gap-[24px]">
                                <span className="flex justify-between">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" value={IntakeForm.name} name="name" className="bg-[#fff6c3] w-[332px]" onChange={handleChange}/>
                                </span>
                                <span className="flex justify-between">
                                    <label htmlFor="DOB">Date of birth:</label>
                                    <input type="date" name="DOB" id="DOB" className="bg-[#fff6c3] w-[332px]" onChange={handleChange}/>
                                </span>
                                <span className="flex justify-between">
                                    <label htmlFor="age">Age:</label>
                                    <input type="number" name="age" id="age" className="bg-[#fff6c3] w-[332px]" onChange={handleChange}/>
                                </span>
                            </div>
                            <button type="submit" className="self-end w-[158px] h-[49px] bg-[#0190B1] rounded-[4px] text-[20px] font-medium text-black cursor-pointer">
                                Next
                            </button>
                        </form>
                        {}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntakeResponse