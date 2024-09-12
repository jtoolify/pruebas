"use client";
import React, { useState } from 'react';
import { Roboto } from 'next/font/google';
import LayoutAdminHeader from '@/components/unique/LayoutAdminHeader/LayoutAdminHeader';
import LayoutAdminFooter from '@/components/unique/LayoutAdminFooter/LayoutAdminFooter';
import LayoutAdminMenu from '@/components/unique/LayoutAdminMenu/LayoutAdminMenu';
import './AdminLayoutglobal.css';
import './AdminLayout.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LayoutAdmin = ({ children }) => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  
  return (
  <div className="contenedorLayoutAdmin">
    <LayoutAdminMenu userModalOpen={userModalOpen} />
    <div className={`mainAdmin ${userModalOpen ? 'toggle' : ''}`} id="idMainAdmin">
      <LayoutAdminHeader setUserModalOpen={setUserModalOpen}  />
      <main >
        {children}
      </main>
      <LayoutAdminFooter />
    </div>
  </div>
)};

export default LayoutAdmin;

