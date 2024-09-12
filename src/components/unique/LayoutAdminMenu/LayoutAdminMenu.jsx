import React from 'react';
import './LayoutAdminMenu.css';

const LayoutAdminMenu = ({userModalOpen}) => {
  return (
    <nav className={`contenedorMenuAdmin ${userModalOpen ? 'toggle' : ''}`} id="idMenuAdmin" >
      <div className="contenedorTituloMenu">
        <h2>admin</h2>
      </div>
      <div className="divisorMenuBorder"></div>
    </nav>
  );
};

export default LayoutAdminMenu;
