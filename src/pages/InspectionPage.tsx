"use client";

import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InspectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Página de Vistoria</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Aqui é onde o formulário de vistoria será construído.
          Precisarei do checklist em um formato de texto para criar os campos.
        </p>
        <Link to="/">
          <Button variant="outline">Voltar para a Página Inicial</Button>
        </Link>
      </main>
    </div>
  );
};

export default InspectionPage;