import * as React from 'react';
import Cart from './Cart';
import Mobilemenu from './Menu';
import { useMediaQuery } from '@mui/material';

export default function Header() {
    const isLargeScreen = useMediaQuery('(min-width:1024px)');
  return (
    <div className="flex justify-between lg:ml-64 items-center p-4">
         {!isLargeScreen && <Mobilemenu/>}
        {/* <Mobilemenu className="lg:hidden"/> */}
        <h1 className="text-2xl font-bold">Home</h1>
        <Cart/>
        
    </div>
  );
}