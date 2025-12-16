"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
            Bem-vindo ao Vistoria Fácil
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
            Simplifique suas vistorias de veículos com nosso aplicativo intuitivo e eficiente.
          </p>
          <Link to="/inspection">
            <Button size="lg" className="px-8 py-4 text-lg">
              Iniciar Nova Vistoria
            </Button>
          </Link>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;