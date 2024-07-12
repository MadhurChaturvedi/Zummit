import React, { useEffect, useRef, useState } from 'react';
import Rectangle541 from '../../images/Rectangle541.png';
import Rectangle544 from '../../images/Rectangle544.png';
import Rectangle547 from '../../images/Rectangle547.png';
import Rectangle534 from '../../images/Rectangle534.png';
import Rectangle531 from '../../images/Rectangle531.png';
import Rectangle535 from '../../images/Rectangle535.png';
import whatsappIcon from '../../images/whatsappIcon.png';
import instaIcon from '../../images/instaIcon.png';
import snapIcon from '../../images/snapIcon.png';
import facebookIcon from '../../images/facebookIcon.png';
import videodataimg from '../../images/videodataimg.png';
import SearchContainer from '../SearchContainer';

const Resources = () => {
  const videoArr = [
    {
      id: 1,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
    {
      id: 2,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
    {
      id: 3,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
    {
      id: 4,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
    {
      id: 5,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
    {
      id: 6,
      img: Rectangle541,
      title: 'Learn the art of celebrating every moment in life and find a path for inner peace',
      duration: 5,
      category: 'Anxiety'
    },
  ]
  const articleArr = [
    {
      id: 1,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
    {
      id: 2,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
    {
      id: 3,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
    {
      id: 4,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
    {
      id: 5,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
    {
      id: 6,
      img: Rectangle547,
      title: 'Work out an hour daily for healthy life style',
      duration: 5,
      author: 'Emma Stone',
      category: 'Body Image'
    },
  ]

  /* Currently selected Tab */
  const firstBtn = useRef();
  useEffect(() => {
    firstBtn.current.focus();
  }, []);

  /* States */
  const [selectedTab, setSelectedTab] = useState(0);
  const [showPage, setShowPage] = useState({ id: null, type: null });

  /* States to handle "See All" button */
  const [allVideos, setAllVideos] = useState({ videoArr: videoArr, showItems: 2 });
  const [allArticles, setAllArticles] = useState({ articleArr: articleArr, showItems: 2 });

  /* Function to handle "See All" button */
  const handleShowMore = (type) => {
    if(type === 'videos') {
      setAllVideos(allVideos.showItems >= videoArr.length ? allVideos.showItems : allVideos.showItems + 1);
    } else {
      setAllArticles(allArticles.showItems >= articleArr.length ? allArticles.showItems : allArticles.showItems + 1);
    }
  };
  
  /* Static Component - To Be Updated */
  const ResourcePage = ({ id, type }) => {
    return(
      <div className='w-[1129px] h-auto flex justify-between'>
        <div className='w-[744px] h-auto flex flex-col gap-[19px] mt-[13px]'>
          <img className='w-inherit h-[261px] object-cover' src={Rectangle544} alt="articleImage" />
          <p className='text-[16px] leading-[20px] font-[400]'>It’s only natural to experience very strong emotions in response to big things happening around 
             us that we often cannot control. Yet those emotions hold an often-overlooked opportunity: to see 
             the dread, anger, resentment, outrage or fear, as the product of a collision between things unfolding 
             in the world and our deeply held and cherished core beliefs and ideals. When you feel outrage over the 
             way some groups are treated by others in our society, this is precisely because you deeply value justice, 
             fairness, and compassion
          </p>
          <h2 className='text-[24px] leading-[36px] font-[500]'>Feel what it feels like to fully embrace your deeply held values. Maybe notice how it feels in your body.</h2>
          <p className='text-[16px] leading-[20px] font-[400]'>What would it be like to shift your brain’s tendency to focus on the pain and instead to take some time to 
             acknowledge and treasure your commitment to those values? Consider holding it clearly in your mind and heart 
             and strengthening your resolve to act in alignment with those core values, instead of becoming discouraged by 
             the enormity of the challenge. Could this inner resolve perhaps allow you to feel a little less powerless, a 
             little more inspired and emboldened to take whatever action is available to you in this moment? As a first step, 
             maybe you can stand a bit taller and feel less defeated by events in the world. Mindfulness and compassion dance 
             together in this way to make us stronger in the face of the challenges we face in life, even the seemingly vast 
             ones that we see all around us today.
          </p>
          <h2 className='text-[24px] leading-[36px] font-[500]'>A Guided Practice for Savoring Your Values</h2>
          <p className='text-[16px] leading-[20px] font-[400]'>1. I’d like to invite you to consider what’s present in your heart just now. What emotions are arising? Perhaps 
             you’re feeling uncomfortable, uneasy, suffering in some way, something weighs on your heart or your mind. 
             Maybe you are attending to things around you in your immediate environment, or in society at large, or in the world. 
             Perhaps you are feeling fear, discontent, outrage, nervousness, unsettledness, worry, anger.
          </p>
        </div>
        <div className='w-[360px] h-[103px] flex flex-col justify-between'>
          <div className='w-inherit h-[59px] flex flex-col gap-[12px]'>
            <h2 className='text-[22px] leading-[33px] font-[600] text-[#00677F]'>Share Options</h2>
            <p className='text-[14px] leading-[17.5px] font-[400]'>Share this article with someone who might need</p>
          </div>
          <div className='w-inherit h-[32px] flex gap-[12px]'>
            {socialIcons.map((icon) => (
              <img className='cursor-pointer' key={icon.id} src={icon.img} alt={icon.img} />
            ))}
          </div>
        </div>
      </div>
    )
  };

  /* Used in AllTabs */
  const ArticleCard = ({ article }) => {
    return (
      <div className='w-[26.5rem] h-[9.68rem] flex gap-x-2.5 bg-white py-4 px-3'>
        <img className='w-[10.25rem] h-full rounded object-cover' src={article.img} alt="sampleArticleImage" />
        <div className='w-[14.3rem] h-full flex flex-col gap-y-2 text-sm font-medium'>
          <h2 className='text-base'>{article.title}</h2>
          <div className='w-full h-[1.125rem] flex justify-between text-[#3D3B3E] font-normal'>
            <p>Article|{article.duration} min</p>
            <p>Author|{article.author}</p>
          </div>
          <p className='text-[#0190B1]'>{article.category}</p>
        </div>
      </div>
    )
  };

  /* Used in AllTabs */
  const VideoCard = ({ video }) => {
    return (
      <div className='w-[22.5rem] h-[11rem] flex flex-col justify-between bg-white border border-[#0190B1] rounded py-3 px-2 font-medium'>
        <img className='w-full h-[4.5rem] rounded object-cover' src={video.img} alt="sampleImage" />
        <p className='text-black text-base'>
          {video.title}
        </p>
        <div className='flex gap-x-2.5 text-sm'>
          <p className='text-[#787579]'>Duration: {video.duration} min</p>
          <p className='text-[#0190B1]'>{video.category}</p>
        </div>
      </div>
    )
  };

  /* Used in ArticlesTab and VideosTab */
  const SelfImprovementComponent = () => {
    return (
      <div className='w-full h-[9.4rem] flex flex-col gap-y-3 mt-6'>
        <h2 className='text-2xl font-semibold'>Self Improvement</h2>
        <div className='w-full flex gap-2 flex-wrap'>
          {selfImprovement.map((item) => (
            <div key={item.id} className='bg-[#B4F0FF] py-4 px-[1.125rem] text-[#3D3B3E] text-xs font-normal rounded'>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    )
  };

  /* Common Card component for Articles and Videos */
  const VideoOrArticleCardComponent = ({ item, type }) => {
    return (
      <div 
        className='w-[90%] flex flex-col items-center p-3 border border-[#B4F0FF] rounded cursor-pointer' 
        onClick={() => setShowPage({ id: item.id, type: type })} 
      >
        <img className='w-[95%] rounded object-cover' src={item.img} alt="cardImage" />
        <div className='w-full flex flex-col gap-3 mt-3'>
          <h2 className='text-base font-normal text-[#0190B1]'>{item.name}</h2>
          <p className='text-sm font-medium'>{item.text}</p>
          <div className='w-full h-[1.125rem] flex gap-x-3 text-sm font-normal text-[#3D3B3E]'>
            {item.author ? <p>Read|{item.duration} min</p> : <p>Duration|{item.duration} min</p>}
            {item.author ? <p>Author|{item.author}</p> : null}
          </div>
        </div>
      </div>
    )
  };

  /* VIDEOS TAB */
  const VideosTab = () => {
    return(
      <div className='w-full h-auto mt-5 flex gap-x-12'>
        <div className='w-[62%] h-[72rem] flex flex-col justify-between'>
          <div className='w-full h-[22.1rem] flex flex-col gap-y-2'>
            <h2 className='text-2xl font-semibold text-[#00677F]'>Recently Added Videos</h2>
            {/* YouTube */ }
            <div className='w-full h-[19.5rem] flex flex-col py-6 bg-[#101617]'>
                <iframe className='w-full h-[16.5rem]' 
                  src='https://www.youtube.com/embed?v=rkZl2gsLUp4&t=5s' 
                  title="How to manage your mental health | Leon Taylor | TEDxClapham">
                </iframe>
                <h2 className='text-xl font-medium text-white p-5'>
                  How to manage your mental health | Leon Taylor | TEDxClapham
                </h2>
                <p className='text-sm font-medium text-[#787579] pl-5'>Duration 5 min</p>
              </div>
          </div>
          {/* Video Cards */}
          <div className='w-full h-[48rem] overflow-auto'>
            <div className='w-full h-full grid grid-cols-2 gap-2.5'>
              {videoData.map((item) => (
                <VideoOrArticleCardComponent key={item.id} item={item} type='video' />
              ))}
            </div>
          </div>
        </div>
        {/* Trending Videos */}
        <div className='w-[30%] flex flex-col'>
          <div className='w-full flex flex-col gap-y-3'>
            <h2 className='text-2xl font-semibold text-[#00677F]'>Trending Videos of the Week</h2>
            {trendingVideos.slice(0,3).map((video) => (
              <div key={video.id} className='w-full flex flex-col gap-y-2 px-4 py-3 border border-[#B4F0FF] font-medium'>
                <img className='w-full h-[4.4rem] rounded object-cover' src={video.img} alt='trendingVideosImage' />
                <p className='text-xl text-[#101617]'>{video.title}</p>
                <p className='text-sm text-[#3D3B3E]'>Duration {video.duration} min</p>
            </div>
            ))}
          </div>
          <SelfImprovementComponent />
        </div>
      </div>
    )
  };

  /* ARTICLES TAB */
  const ArticlesTab = () => {
    return(
      <div className='flex gap-12 mt-5'>
        {/* Recently Added Articles */}
        <div className='w-[65%]'>
          <p className='text-2xl font-semibold text-[#00677F] mb-3'>Recently Added</p>
          <div className='w-full h-[44rem] overflow-auto'>
            <div className='grid grid-cols-2 gap-5'>
              {articleData.map((item) => (
                <VideoOrArticleCardComponent key={item.id} item={item} type='article' />
              ))}
            </div>
          </div>
        </div>
        {/* Trending Blogs */}
        <div className='w-[35%] flex flex-col gap-y-3 border-t-[0.5px] border-[#0190B1]'>
          <p className='text-2xl font-semibold text-[#00677F] mt-2'>Trending Blogs of the Week</p>
          {trendingBlogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className='w-full h-[8.8rem] p-3 flex gap-x-5 border border-[#B4F0FF]'>
              <img className='w-[30%] object-cover' src={blog.img} alt="trendingBlogImg" />
              <div className='w-[80%] flex flex-col justify-between'>
                <p className='text-xl font-medium'>{blog.title}</p>
                <div className='w-full h-[1.125] flex gap-x-3 text-sm font-normal text-[#3D3B3E]'>
                  <p>Read| {blog.duration} min</p>
                  <p>Author|{blog.author}</p>
                </div>
              </div>
            </div>
          ))}
          <SelfImprovementComponent />
        </div>
      </div>
    )
  };

  /* ALL TAB */
  const AllTab = () => {
    return (
      <div className='mt-8'>
        {/* Videos Container */}
        <div className='flex gap-8'>
          <div className='w-[55%] flex flex-col gap-5'>
            <h2 className='text-[1.75rem] leading-[2.62rem] font-medium text-black'>
              Our latest Videos to keep you Engaged
            </h2>
            <div className='w-full h-[22.62rem] flex flex-col py-6 bg-[#101617] font-medium'>
              <iframe className='w-inherit h-[16.5rem]' 
                src='https://www.youtube.com/embed?v=rkZl2gsLUp4&t=5s' 
                title="How to manage your mental health | Leon Taylor | TEDxClapham">
              </iframe>
              <h2 className='text-xl text-white p-5'>
                How to manage your mental health | Leon Taylor | TEDxClapham
              </h2>
              <p className='text-sm text-[#787579] pl-5'>Duration 5 min</p>
            </div>
          </div>
          {/* Video Cards */}
          <div className='w-[45%] h-[26.5rem] flex flex-col gap-4 overflow-y-auto'>
            {videoArr.slice(0, allVideos.showItems).map((video) => (
              <VideoCard video={video} />
            ))}
            {videoArr.length > allVideos.showItems 
              ? <button 
                  className='w-[25%] p-1 border border-[#00677F] rounded text-2xl font-medium text-[#00677F]'
                  onClick={() => handleShowMore('videos')}
                >See All</button> 
              : null
            }
          </div>
        </div>

        {/* Articles Container */}
        <div className='mt-20 flex gap-10'>
          <div className='w-[54%] flex flex-col gap-y-10'>
            <h2 className='text-[1.75rem] leading-[2.62rem] font-medium text-black'>
              Our latest Articles to keep you Engaged
            </h2>
            <div className='w-full h-[20.37rem] bg-white flex flex-col gap-y-3 py-6 px-4'>
              <img className='w-full h-[12.3rem] rounded object-cover' src={Rectangle544} alt="ArticleImage" />
              <div className='w-full h-[1.125rem] flex gap-x-4 text-sm font-normal text-[#3D3B3E]'>
                <p>Article|5 min</p>
                <p>Author|Tobey</p>
                <p className='text-[#0190B1]'>Anger Management</p>
              </div>
              <h2 className='text-2xl font-medium text-black'>Meditation helps you to calm your mind</h2>
            </div>
          </div>
          {/* Article Cards */}
          <div className='w-[55%] h-[23.5rem] flex flex-col gap-y-3 overflow-y-auto'>
            {articleArr.slice(0, allArticles.showItems).map((article) => (
              <ArticleCard article={article} />
            ))}
            {articleArr.length > allArticles.showItems 
              ? <button 
                  className='w-[25%] p-1 border border-[#00677F] rounded text-2xl font-medium text-[#00677F]'
                  onClick={() => handleShowMore('articles')}
                >See All</button> 
              : null
            }
          </div>
        </div>
      </div>
    )
  };

  const TabsContainer = () => {
    const tabs = [
      {
        title: 'All',
        content: <AllTab />
      },
      {
        title: 'Articles',
        content: <ArticlesTab />
      },
      {
        title: 'Videos',
        content: <VideosTab />
      }
    ];
    return (
      <div className='flex flex-col'>
        <div className='w-[25%] h-[2.7rem] flex justify-between items-center text-2xl font-medium text-gray-900 cursor-pointer'>
          {tabs.map((tab, index) => (
            <button 
              ref={index === 0 ? firstBtn : null}
              key={index} 
              className={`outline-none w-auto hover:bg-[#FDFEE6] p-1 ${selectedTab === index ? "bg-[#FDFEE6]" : ""}`}
              onClick={() => {setSelectedTab(index); setShowPage({ id: null, type: null })}}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className='w-full'>
          {showPage.id === null ? tabs.map((tab, index) => (
              <div className={`${selectedTab === index ? "" : "hidden"}`}>
                {tab.content}
              </div>
          )) : (<ResourcePage id={showPage.id} type={showPage.type} />)}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col p-10'>
      <SearchContainer />
      <div className='flex flex-col'>
        <h2 className='text-[1.75rem] leading-[2.5rem] font-medium text-gray-900 py-6'>Resources</h2>
        <TabsContainer />
      </div>
    </div>
  )
}

/* Arrays */
const articleData = [
  {
    id: 1,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 2,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 3,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 4,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 5,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 6,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 7,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  {
    id: 8,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: Rectangle534,
    author: 'Tobey',
    duration: 5
  },
  
];

const videoData = [
  {
    id: 1,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
  {
    id: 2,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
  {
    id: 3,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
  {
    id: 4,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
  {
    id: 5,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
  {
    id: 6,
    name: 'Anger Management',
    text: 'Controlling your emotions is not an easy task here is a technique to help yourself',
    img: videodataimg,
    duration: 5
  },
];

const socialIcons = [
  {
    id: 1,
    img: whatsappIcon
  },
  {
    id: 2,
    img: instaIcon
  },
  {
    id: 3,
    img: snapIcon
  },
  {
    id: 4,
    img: facebookIcon
  }
];

const trendingBlogs = [
  {
    id: 1,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
  {
    id: 2,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
  {
    id: 3,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
  {
    id: 4,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
  {
    id: 5,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
  {
    id: 6,
    title: '5 Things which i learnt helped me to fix my problems',
    duration: 5,
    author: 'Tobey',
    img: Rectangle531
  },
];

const trendingVideos = [
  {
    id: 1,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
  {
    id: 2,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
  {
    id: 3,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
  {
    id: 4,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
  {
    id: 5,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
  {
    id: 6,
    img: Rectangle535,
    title: 'The walls which are vanishing has the stories from ancient history',
    duration: 5
  },
];

const selfImprovement = [
  { id: 1, name: 'Abuse' },
  { id: 2, name: 'Anger Management' },
  { id: 3, name: 'Anxiety' },
  { id: 4, name: 'Body Image' },
  { id: 5, name: 'Burn Outs' },
  { id: 6, name: 'Boundaries' }
];

export default Resources