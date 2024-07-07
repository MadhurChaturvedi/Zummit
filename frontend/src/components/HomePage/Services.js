import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center bg-white mb-8 py-10">
        <div className="w-full  max-w-[1061px] max-md:max-w-full">
          <div className="flex  mt-5 gap-8 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 my-auto text-base max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-medium leading-10 text-[#00677F]  whitespace-nowrap">
                  Group Therapy
                </div>
                <div className="mt-7 leading-5 text-justify text-slate-950 max-md:mt-10 max-md:max-w-full">
                  <p style={{ fontSize: '16px' }}>
                  Group Counselling or Group Therapy is a form of therapy in which
                  the group comprises 4-10 members facilitated by one or two group therapists who meet
                  at regular intervals to work on certain issues. It usually focuses on a particular issue
                  such as grief, caregiver burnout, addiction etc. The therapist leads the group and the
                  members contribute by sharing their experiences and offer support and feedback to each
                  other. It helps people going through similar issues come together and counter the
                  feelings of isolation.
                  </p>
                </div>
                <Link to="/services/group-therapy">
                  <button className="justify-center self-start px-2 py-1 mt-7 text-white whitespace-nowrap bg-cyan-600 rounded">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dacb78298d7b30ff408e51eb6d66ed9130aad28e6cc8c09fd7ef6c0b8d7948f?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="grow w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1069px] max-md:max-w-full">
          <div className="flex mt-5 gap-8 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6795276df6673bc9c9256e1ca91353cd2fa488dff0eb81e7a7366eb2660dc8?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="grow w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 mb-18 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto text-base max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-medium leading-10 text-[#00677F]  max-md:max-w-full">
                  Support Group Therapy
                </div>
                <div className="mt-9 leading-5 text-justify text-slate-950 max-md:mt-10 max-md:max-w-full">
                  <p style={{ fontFamily: 'Quicksand', fontSize: '16px' }}>
                  Support group or self-help group is a platform for people going
                  through similar concerns or experiences to come together and extend emotional support,
                  share experiences, educational information and learn coping strategies. The group
                  usually meets once a week and aims to garner peer support.
                  </p>
                </div>
                <Link to="/services/support-group">
                  <button className="justify-center self-start px-2 py-1 mt-9 text-white whitespace-nowrap bg-cyan-600 rounded">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full max-w-[1076px] max-md:max-w-full">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 mt-8 text-base max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-medium leading-10 text-[#00677F] max-md:max-w-full">
                  Individual Therapy
                </div>
                <div className="mt-7 leading-5 text-justify text-slate-950 max-md:mt-10 max-md:max-w-full">
                  <p style={{ fontSize: '16px' }}>
                  Individual counselling which is also called talk therapy or
                  psychotherapy is a one-on-one process in which the therapist/counsellor works with the clients in a 
                  confidential,non-judgmental, compassionate and safe environment. Counselling 
                  aims to resolve emotional difficulties and improve overall well-being. It helps
                  clients to reflect on self and develop insights which lead to growth and better
                  understanding of oneself.
                  </p>
                </div>
                <Link to="/services/individual-therapy">
                  <button className="justify-center self-start px-2 py-1 mt-7 text-white whitespace-nowrap bg-cyan-600 rounded">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bf197ec5a3946e6064291c426a186d917d6b33ad5ba249a786d05025aa2ca?apiKey=8587097ed3a94b279b125430c3e068a6&"
                className="grow w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services