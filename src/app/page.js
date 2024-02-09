

import React from 'react';
import Profile from '../components/ui/Profile'
import Qualification from './../components/ui/Qualification';
import Jfooter from './../components/ui/Jfooter';

export default function Home() {
  return (
    <main className="flex   flex-col items-center justify-between ">
   <Profile/>
 <Qualification/>
 <Jfooter/> 
   
  
  
  
    </main>
  )
}
