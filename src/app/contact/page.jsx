import Link from 'next/link';
import { test } from '../../components/ui/Test';
import React from 'react';


const Contact = () => {
    return <div className='h-screen w-screen pt-20 bg-green-700'>
        <h1 className='text-2xl'>Here is my Contact Number:</h1> <br/>
        <p>You can call me any  </p>
{
    test.map((pre,index)=>(
        <Link href={pre.link} key={index}>Test</Link>
    ))
}
    </div>;
}


export default Contact;