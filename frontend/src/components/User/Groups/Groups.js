import React, { useState } from 'react';
import SearchContainer from "../SearchContainer";
import flowerImg from "../../images/flower-img.png";
import { Link } from 'react-router-dom';

const Groups = () => {
    const [groupTherapyToggle, setGroupTherapyToggle] = useState(true);
    const [supportGroupToggle, setSupportGroupToggle] = useState(false);

    const handleGroupTherapyToggle = () => {
        setGroupTherapyToggle(true);
        setSupportGroupToggle(false);
    };

    const handleSupportGroupToggle = () => {
        setGroupTherapyToggle(false);
        setSupportGroupToggle(true);
    };

    // Tabs Component
    const TabsContainer = () => {
        const tabs = [
            {
                title: "Group Therapy",
                content: <GroupTherapyContainer />,
                toggler: handleGroupTherapyToggle,
                active: groupTherapyToggle
            },
            {
                title: "Support Group",
                content: <SupportGroupContainer />,
                toggler: handleSupportGroupToggle,
                active: supportGroupToggle
            }
        ];
        return (

            <div className='w-[95%] flex flex-col mt-[24px]'>
                <div className=' h-[2.7rem] flex  gap-10 items-center text-2xl font-medium text-gray-900 cursor-pointer'>
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        className={`outline-none w-auto rounded-md p-2 hover:bg-[#E6FAFF] p-1 ${tab.active ? "bg-[#FDFEE6]" : ""}`}
                        onClick={tab.toggler}
                    >
                        {tab.title}
                    </button>
                ))}
                </div>
                <div className='w-full'>
                    {tabs.map((tab, index) => (
                        <div className={`${tab.active ? "" : "hidden"}`}>
                            <div className="w-full bg-white flex flex-wrap gap-4 py-5 px-4 shadow-lg rounded-md p-2 mt-6">
                                {tab.content}
                            </div>
                        </div>
                    ))}
                </div>
          </div>
        )
    };

    // Support group component
    const SupportGroupContainer = () => {
        return (
            <>
                {new Array(4).fill('').map((_, index) => (
                    <Link
                        to={`/user-support/${index}`} 
                        key={index} 
                        className="w-[32%] my-2 p-3 rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]"
                    >
                        <div className="relative">
                            <img src={flowerImg} alt="flowerImg" />
                            <p className='bg-[#F7F131] absolute rounded-lg px-2 py-1 top-3 right-5'>Starts: 16 March</p>
                        </div>
                        <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                            Lacus amet egestas ullamcorper fermentum
                        </p>
                        <p className="leading-5 text-[#272529]">
                            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
                            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
                        </p>
                    </Link>
                ))}
            </>
        )
    };

    // Group therapy component
    const GroupTherapyContainer = () => {
        return (
            <>
                {new Array(4).fill('').map((_, index) => (
                    <Link
                        to={`/user-group/${index}`} 
                        key={index} 
                        className="w-[32%] my-2 p-3 rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]"
                    >
                        <div className="relative">
                            <img src={flowerImg} alt="flowerImg" />
                            <p className='bg-[#F7F131] absolute rounded-lg px-2 py-1 top-3 right-5'>Starts: 16 March</p>
                        </div>
                        <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                            Lacus amet egestas ullamcorper fermentum
                        </p>
                        <p className="leading-5 text-[#272529]">
                            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
                            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
                        </p>
                    </Link>
                ))}
            </>
        )
    };
    return (
        <div className="w-full p-10 pb-5">
            <SearchContainer />
            <TabsContainer />
        </div>
    )
}

export default Groups