import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-0">
        <Hero />
        <Pricing />
      </main>
    </>
  );
}

export default App;
