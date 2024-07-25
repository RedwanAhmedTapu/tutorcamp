import React from 'react';
import { GitHub } from '@mui/icons-material';
const GithubHomePage = () => {
  return (
   <>
    <div className="w-full h-auto flex flex-col items-center gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-orange-600">
        <GitHub className="w-full h-full" />
      </div>
      <div className="text-yellow-400 text-2xl">চতুর্থ অধ্যায়</div>
      <div className="text-yellow-500 text-3xl text-center">
       Github
      </div>
      </div>
   </>
  )
}

export default GithubHomePage;