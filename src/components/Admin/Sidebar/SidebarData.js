import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Add Item',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Pending Orders',
    path: '/pendingdelivery',
    icon: <MdIcons.MdOutlineDeliveryDining />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Orders',
    path: '/completedorders',
    icon: <MdIcons.MdOutlineDeliveryDining />,
    cName: 'nav-text'
  },
  {
    title: 'User Complaints',
    path: '/allcomplaints',
    icon: <RiIcons.RiFileList2Fill />,
    cName: 'nav-text'
  },

  {
    title: 'Add New',
    path:'/AddNew',
    icon: <MdIcons.MdOutlineProductionQuantityLimits/>,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <RiIcons.RiLogoutBoxRFill />,
    cName: 'nav-text'
  },
  {
    title: 'Upload Excel',
    path:'/upload',
    icon: <AiIcons.AiOutlineUpload/>,
    cName: 'nav-text'
  },
];