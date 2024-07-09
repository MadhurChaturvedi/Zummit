import React from 'react';
import UserSidebar from '../UserSidebar';
import SearchContainer from '../SearchContainer';
import GroupTherapyAnxiety from '../../images/GroupTherapyAnxiety.png';
import GroupTherapist from '../../images/GroupTherapist.png';

const UserGroupTherapy = () => {
  const dummy = {
    id: 1,
    name: "Jordan Patel",
    sessions: 20,
    date: "18-02-2024",
    price: 4000,
    slots: 35,
    time: "3:00 PM",
    occur: "Every Wednesday" 
  };

  const InfoCard = () => {
    return (
        <div className='w-[90%] flex shadow-lg bg-white'>
            <img className='w-[30%]' src={GroupTherapyAnxiety} alt={GroupTherapyAnxiety} />
            <div className='w-[70%] flex justify-between p-4'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-3xl leading-10'>Anxiety</h3>
                    <div className='flex gap-10 font-medium text-xl leading-6'>
                        <div className='flex flex-col gap-3'>
                            <p>Therapist:</p>
                            <p>Sessions:</p>
                            <p>Starts on:</p>
                            <p>Price:</p>
                            <p>Slots:</p>
                            <p>Time:</p>
                            <p>Occur:</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{dummy.name}</p>
                            <p>{dummy.sessions}</p>
                            <p>{dummy.date}</p>
                            <p>Rs {dummy.price}</p>
                            <p>{dummy.slots}</p>
                            <p>{dummy.time}</p>
                            <p>{dummy.occur}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center text-xl font-medium leading-6'>
                    <p className='text-[#B00202]'>{dummy.slots > 35 ? dummy.slots : "Only few slots left"}</p>
                    <button className='w-[13.5rem] h-12 bg-[#0190B1] text-[#F7F131]'>Register</button>
                </div>
            </div>
        </div>
    )
  };

  const DescriptionCard = () => {
    return(
        <div className='w-[90%] flex flex-col gap-3 bg-[#FDFEE6] p-6'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-xl leading-8 font-semibold text-[#00677F]'>Description</h3>
                <p className='text-xs leading-5 font-normal text-[#001519]'>Lorem ipsum dolor sit amet consectetur. Sed gravida commodo risus erat vel malesuada. 
                   Urna erat odio lacinia consectetur porttitor non et tellus dignissim. 
                </p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-xl leading-8 font-semibold text-[#00677F]'>Purpose and goals</h3>
                <p className='text-xs leading-5 font-normal text-[#001519]'>Lorem ipsum dolor sit amet consectetur. Volutpat erat at cras in volutpat. 
                   Eu lectus tellus enim arcu amet ullamcorper lacus. At consequat nunc vitae eu 
                   quis maecenas vitae turpis. Neque vestibulum sapien et faucibus odio sed facilisi nisl. 
                   Adipiscing iaculis ultrices velit semper aliquam. Dui sit risus penatibus ut phasellus 
                   ultricies eu dolor. Ultrices mauris vestibulum lectus eget leo. Accumsan a aliquam at viverra 
                   posuere sit. Ac morbi tellus aliquam pharetra risus nisl metus.
                </p>
            </div>
        </div>
    )
  };

  const TherapistCard = () => {
    return(
        <div className='w-[90%] flex flex-col bg-[#B4F0FF] p-2'>
            <div className='flex gap-3'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-2xl leading-8'>Know your Therapist</h3>
                    <img src={GroupTherapist} alt={GroupTherapist} />
                </div>
                <div className='w-[50%] flex flex-col gap-3'>
                    <h3 className='font-semibold text-2xl leading-8 text-[#00677F]'>Why I became a therapist</h3>
                    <p className='text-[1rem] font-normal leading-5 text-black'>I have always been fascinated by human behavior and why people become the way they are. 
                       While we all may be individually different, we all derive our thoughts, patterns, and 
                       behaviors in the same way: life experience. We also all share the ability to show great strength, 
                       resilience, and insight when put to the test. My clients inspire me and continuously motivate me to 
                       be a better therapist and person. It is a privilege to hold space for people to be vulnerable and 
                       share their stories and I am honored to play a small part in their journeys of self-discovery and empowerment.
                    </p>
                </div>
            </div>
            <h3>Jordan</h3>
        </div>
    )
  }
  return (
    <div className='flex'>
        <UserSidebar />
        <div className='w-full bg-[#F2FCFF] px-10 pb-5'>
            <SearchContainer />
            <div className='w-[94%] h-auto flex flex-col ml-11 mt-8'>
                <h2 className='text-[1.75rem] leading-[2.5rem] font-medium text-gray-900'>Group Therapy/Anxiety</h2>
                <div className='flex flex-col gap-8 mt-6'>
                    <InfoCard />
                    <DescriptionCard />
                    <TherapistCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserGroupTherapy