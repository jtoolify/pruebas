"use client"
import React, { useState, useEffect } from 'react';
import ClienteHeaderMenuIcon from '@/components/unique/ClienteHeaderMenuIcon/ClienteHeaderMenuIcon';
import ClienteHeaderNavMenu from '@/components/unique/ClienteHeaderNavMenu/ClienteHeaderNavMenu';
import './ClienteHeaderMenu.css';

const ClienteHeaderMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState({
    main: null,
    sub: null
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1148) {
        setIsOpenMenu(false);
        setActiveDropdown({ main: null, sub: null }); // Cierra todos los submenús al cambiar de tamaño
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Añadir o quitar la clase 'no-scroll' al body según el estado del menú
    document.body.classList.toggle('no-scroll', isOpenMenu);
  }, [isOpenMenu]);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
    if (!isOpenMenu) {
      setActiveDropdown({ main: null, sub: null }); // Cierra todos los submenús cuando el menú principal se abre
    }
  };

  const handleMainDropdownToggle = (label) => {
    setActiveDropdown(prev => ({
      ...prev,
      main: prev.main === label ? null : label,
      sub: prev.main === label ? null : prev.sub
    })); // Alterna el menú principal
  };

  const handleSubDropdownToggle = (label) => {
    setActiveDropdown(prev => ({
      ...prev,
      sub: prev.sub === label ? null : label
    })); // Alterna el submenú
  };

  return (
    <>
      <ClienteHeaderMenuIcon isOpenMenu={isOpenMenu} setIsOpenMenu={handleMenuToggle} />
      <ClienteHeaderNavMenu 
        isOpenMenu={isOpenMenu} 
        activeDropdown={activeDropdown}
        onMainDropdownToggle={handleMainDropdownToggle}
        onSubDropdownToggle={handleSubDropdownToggle}
      />
    </>
  );
};

export default ClienteHeaderMenu;
