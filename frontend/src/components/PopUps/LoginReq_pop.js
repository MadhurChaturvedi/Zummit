import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

const LoginReq_pop = ({ setShowPopUp }) => {

    const PopUpRef = useRef();

    useEffect(() => {
        function handler(e) {
            if (!PopUpRef.current.contains(e.target)) {
                setShowPopUp(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    }, []);

    return (
        <>
            <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(148,157,156,0.53)]">
                <div class="relative w-[70%] bg-white rounded-lg shadow" ref={PopUpRef}>
                    <div class="text-center border-b-2 border-[#0190B1]">
                        <h3 class="w-[100%] my-5 text-[28px] md:text-[24px] sm:text-[20px] text-[#0190B1]">Login Required</h3>
                    </div>
                    <div className="my-[24px] mx-[15vw]">
                        <p className="text-[20px] md:text-[16px] sm:text-[14px]">To complete the process Login or Sign Up is required, so please <Link to="/login" target="_top" className="text-[#0190B1]">click here</Link> to
                            LOGIN</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginReq_pop

