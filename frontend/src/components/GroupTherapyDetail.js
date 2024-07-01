import React from 'react'
import { useEffect, useState } from "react";
import FrustrationVector from './images/Frustration_concept_vector.png'
import FacilitatorImage from './images/facilitator_group_service.jpg'
import GroupTherapyImg1 from './images/group_therapy_img1.jpg'
import GroupTherapyImg2 from './images/group_therapy_img2.jpg'
import GroupTherapyImg3 from './images/group_therapy_img3.jpg'
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from '../utils/Slices/bookingSlice'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

/* this page is resusable, so components which has "variable" tag will be added through prop, 
and components with tag "rendered" will be iterable*/
const GroupTherapyDetail = () => {

  const group_details = useSelector((state) => state.booking.selectedCouncellor)
  const dispatch = useDispatch();

  const { id } = useParams;

  async function getGroupData() {
    //get data from API
    await axios.get(`booking_api/${id}`, {
      withCredentials: true,
    }).then((data) => {
        console.log(data)
        //add fetched data in redux state if data is available
        if (data) {
          dispatch(addGroup(data))
        } else {
          return (
            <>
              <h1>404 Not Found...</h1>
            </>
          )
        }
      }).catch((err) => console.log(err))
  }

  useEffect(() => {
    getGroupData()
  }, [id, dispatch]);

    return (
        <div>
            <div className="px-[99px] py-[31px] flex flex-row">
                <div className="w-[486px] h-[486px]  mr-[86px]">
                    <img src={FrustrationVector} alt="Vector portraying a patient" />
                </div>
                <div>
                    <h1 className="text-[32px] font-semibold text-[#00677F] py-[50px]">Lonliness</h1>{/*Variable*/}
                    <div className="flex flex-col gap-[27px] font-medium text-[24px]">
                        <h3>Starts on 24 January | 5 sessions</h3>{/*Variable*/}
                        <h3>Every week Sat - Sun | 10:30AM</h3>{/*Variable*/}
                        <h3>5-7 People</h3>{/*Variable*/}
                        <h3>60-min online video zoom session</h3>{/*Variable*/}
                    </div>
                    <button className="mt-[37px] mx-[2px] py-[8px] px-[12px] bg-[#4DB3CB] text-[28px] font-medium text-[#FDFEF1] rounded-[4px]">
                        Register for Group
                    </button>
                </div>
            </div>
            <div className="px-[158px] flex flex-col gap-[50px]">
                <div className="flex flex-col gap-[25px]">
                    <h1 className="text-[28px] font-medium text-[#00677F]">What will we talk about?</h1>
                    <p className="text-[16px]">{/*Variable*/}
                        Lorem ipsum dolor sit amet consectetur.
                        Sed gravida commodo risus erat vel malesuada.
                        Urna erat odio lacinia consectetur porttitor non et tellus dignissim.
                    </p>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <h1 className="text-[28px] font-medium text-[#00677F]">
                        Purpose and goals of this group
                    </h1>
                    <p className="text-[16px]">{/*Variable*/}
                        Lorem ipsum dolor sit amet consectetur. Volutpat erat at cras in volutpat. 
                        Eu lectus tellus enim arcu amet ullamcorper lacus. At consequat nunc vitae 
                        eu quis maecenas vitae turpis. Neque vestibulum sapien et faucibus odio sed 
                        facilisi nisl. Adipiscing iaculis ultrices velit semper aliquam. Dui sit risus 
                        penatibus ut phasellus ultricies eu dolor. Ultrices mauris vestibulum lectus eget 
                        leo. Accumsan a aliquam at viverra posuere sit. Ac morbi tellus aliquam pharetra risus nisl metus.
                    </p>
                </div>
            </div>
            <div className="px-[158px] py-[51px]">
                <div className="px-[70px] pt-[34px] pb-[46px] bg-[#B4F0FF] rounded-[4px] flex flex-col gap-[37px]">
                    <div className="text-[32px] font-semibold text-[#0190B1]">Know your Facilitator</div>
                    <div className="flex gap-[72px]">
                        <img src={FacilitatorImage} alt="Facilitator" className="rounded-[4px]" />
                        <div className="flex flex-col gap-[22px] justify-start">
                            <h1 className="text-[28px] font-medium">Mitali</h1>{/*Variable*/}
                            <p className="text-[16px]">{/* Variable */}
                                Lorem ipsum dolor sit amet consectetur. Volutpat erat at cras in volutpat.
                                Eu lectus tellus enim arcu amet ullamcorper lacus. At consequat nunc vitae
                                eu quis maecenas vitae turpis. Neque vestibulum sapien et faucibus odio sed
                                facilisi nisl. Adipiscing iaculis ultrices velit semper aliquam. Lorem ipsum
                                dolor sit amet consectetur. Volutpat erat at cras in volutpat. Eu lectus tellus
                                enim arcu amet ullamcorper lacus. At consequat nunc vitae eu quis maecenas vitae
                                turpis. Neque vestibulum sapien et faucibus odio sed facilisi nisl. Adipiscing iaculis
                                ultrices velit semper aliquam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[51px] pb-[86px] px-[158px] flex flex-col gap-[54px]">
                <h1 className="text-[32px] font-semibold text-[#00677F]">More Groups</h1>
                <div className="flex flex-wrap justify-between gap-[68px]">{/*Iterable*/}
                    <div className="relative h-[332px] w-[226px] rounded-[4px] text-center">
                        <img src={GroupTherapyImg1} alt="group's" className="w-full h-full"/>
                        <h2 className="absolute text-[#FDFEE6] text-[28px] bottom-[10%] w-full">Behaviour</h2>
                    </div>
                    <div className="relative h-[332px] w-[226px] rounded-[4px] text-center">
                        <img src={GroupTherapyImg2} alt="group's" className="w-full h-full"/>
                        <h2 className="absolute text-[#FDFEE6] text-[28px] bottom-[10%] w-full">Behaviour</h2>
                    </div>
                    <div className="relative h-[332px] w-[226px] rounded-[4px] text-center">
                        <img src={GroupTherapyImg3} alt="group's" className="w-full h-full"/>
                        <h2 className="absolute text-[#FDFEE6] text-[28px] bottom-[10%] w-full">Behaviour</h2>
                    </div>
                    <div className="relative h-[332px] w-[226px] rounded-[4px] text-center">
                        <img src={GroupTherapyImg3} alt="group's" className="w-full h-full"/>
                        <h2 className="absolute text-[#FDFEE6] text-[28px] bottom-[10%] w-full">Behaviour</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupTherapyDetail