"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo da Vistoria" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">Vistoria Fácil</h1>
        </Link>
        <nav>
          {/* Futuros links de navegação aqui */}
        </nav>
      </div>
    </header>
  );
};

export default Header;