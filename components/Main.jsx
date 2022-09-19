import React from 'react';
import Social from "./Social";

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
                  <h1 className='py-4 text-gray-700'>Hi, I&#39;m <span className='text-[#5651e5]'> Valeria</span></h1>
                    <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&#39;m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently,
                    I&#39;m focused on building responsive front-end wed applications. In the future I plan to become a Full-Stack developer.
                </p>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                      <div className='flex justify-between items-center my-4 w-full sm:w-[100%]'>
                          <Social/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Main;