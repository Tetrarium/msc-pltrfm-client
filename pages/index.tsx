import React from "react";

import Navbar from "@/components/navbar";
import MainLayout from "@/layouts/mainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро пожаловать!</h1>
          <h3>Здесь собраны лучшие треки</h3>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;