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
                        className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]"
                    >
                        <div className="relative">
                            <div className="relative group overflow-hidden">
                            <img
                                src={flowerImg}
                                alt=""
                                className="w-[316px] m-auto"
                            />
                            </div>
                            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-3 right-5">
                            <p>Starts: 16 March</p>
                            </div>
                        </div>
                        <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                            Lacus amet egestas ullamcorper fermentum
                        </p>
                        <p className="leading-[20px] text-[#272529]">
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
                        className="w-[32%] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]"
                    >
                        <div className="relative">
                            <div className="relative group overflow-hidden">
                            <img
                                src={flowerImg}
                                alt=""
                                className="w-[316px] m-auto"
                            />
                            </div>
                            <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-3 right-5">
                            <p>Starts: 16 March</p>
                            </div>
                        </div>
                        <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                            Lacus amet egestas ullamcorper fermentum
                        </p>
                        <p className="leading-[20px] text-[#272529]">
                            Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
                            Relationship Challenges, Quarter-Life Crisis, Couples Therapy
                        </p>
                    </Link>
                ))}
            </>
        )
    };
    return (
        <div className="w-full bg-[#F2FCFF] px-10 pb-5">
            <SearchContainer />
            <TabsContainer />
        </div>
    )
}

export default Groups