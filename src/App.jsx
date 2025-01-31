import React from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";

const App = () => {
  return (
    <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded-md shadow">
      <div>
        <Header />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
      </div>
    </main>
  );
};

export default App;
