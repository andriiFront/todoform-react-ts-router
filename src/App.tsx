import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutPage } from './Components/pages/AboutPage'
import { TodosPage } from './Components/pages/TodosPage'

declare var confirm: (question: string) => boolean

const App: React.FC = () => {

  return (
    <>
          <BrowserRouter>
          <Navbar />

      <div className="container">

            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<TodosPage />} />
            </Routes>
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
