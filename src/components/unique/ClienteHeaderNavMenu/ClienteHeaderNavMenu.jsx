import React from 'react';
import arrowIcon from '@/assets/header/down-arrow.png';
import Link from 'next/link';
import Image from 'next/image';



const NavLink = ({ href, children }) => (
    <Link href={href} className="nav-menu-item">
      {children}
    </Link>
  );



const Dropdown = ({ toggleLabel, isOpen, onToggle, children }) => (
  <div className="dropdown">
    <button
      className="nav-menu-item dropdown-toggle"
      onClick={onToggle}
    >
      {toggleLabel}
      <Image src={arrowIcon} alt="flecha" width={16} height={16} />
    </button>
    <div className={`dropdown-menu ${isOpen ? 'toggle' : ''}`}>
      {children}
    </div>
  </div>
);


const ClienteHeaderNavMenu = ({ isOpenMenu, activeDropdown, onMainDropdownToggle, onSubDropdownToggle }) => (
  <nav className={`nav-menu ${isOpenMenu ? 'toggle' : ''}`}>
    <NavLink href="/">inicio</NavLink>

    <Dropdown 
      toggleLabel="quienes somos" 
      isOpen={activeDropdown.main === "quienes somos"}
      onToggle={() => onMainDropdownToggle("quienes somos")}
    >
      <NavLink href="/quienes-somos">quienes somos</NavLink>
      <NavLink href="/certificados">certificados</NavLink>
    </Dropdown>

    <Dropdown 
      toggleLabel="ingenierias" 
      isOpen={activeDropdown.main === "ingenierias"}
      onToggle={() => onMainDropdownToggle("ingenierias")}
    >
      <NavLink href="/ingenerias">ingenierias</NavLink>
      <NavLink href="/ingenerias/civil">ingenieria civil</NavLink>
      <NavLink href="/ingenerias/electronica">ingenieria electrónica</NavLink>
      <NavLink href="/ingenerias/electrica">ingenieria eléctrica</NavLink>
      <NavLink href="/ingenerias/sistema">ingenierias de sistemas</NavLink>
      <NavLink href="/ingenerias/ambiental">ingenieria ambiental</NavLink>
      <NavLink href="/ingenerias/mecanica">ingenierias mecánica</NavLink>
      <NavLink href="/ingenerias/industrial">ingenierias industrial</NavLink>
    </Dropdown>

    <Dropdown 
      toggleLabel="logistica" 
      isOpen={activeDropdown.main === "logistica"}
      onToggle={() => onMainDropdownToggle("logistica")}
    >
      <NavLink href="/logistica">logistica</NavLink>
      <Dropdown 
        toggleLabel="transportes" 
        isOpen={activeDropdown.sub === "transportes"}
        onToggle={() => onSubDropdownToggle("transportes")}
      >
        <NavLink href="/transportes">transportes</NavLink>
        <NavLink href="/transportes/carga">transportes de carga</NavLink>
        <NavLink href="/transportes/especial">transportes de especial</NavLink>
        <NavLink href="/transportes/hidrocarburos">transportes de hidrocarburos</NavLink>
      </Dropdown>
    </Dropdown>

    <NavLink href="/blog">blog</NavLink>
    <NavLink href="/contactos">contactos</NavLink>
  </nav>
);

export default ClienteHeaderNavMenu;
