import React, { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Button from "./components/Shared/Button";

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  // Details
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded-md shadow">
      {/* useState */}
      {showInvoice ? (
        <div>
          <Header handlePrint={handlePrint} />
          <MainDetails />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
          <Button
            onClick={() => setShowInvoice(false)}
            text={"Preview Invoice"}
            bgColor={"bg-blue-500"}
            textColor={"text-white"}
            borderColor={"border-blue-500"}
            hoverBg={"hover:bg-transparent"}
            hoverText={"hover:text-blue-500 "}
          />
        </div>
      ) : (
        // name, address, email , phone , bank name, bank account number, website ,client name, client address, invoice number, invoice date , due date, notes
        <div className="flex flex-col justify-center">
          <input type="text" placeholder="Enter your Name" autoComplete="off" />

          <Button
            onClick={() => setShowInvoice(true)}
            text={"Preview Invoice"}
            bgColor={"bg-blue-500"}
            textColor={"text-white"}
            borderColor={"border-blue-500"}
            hoverBg={"hover:bg-transparent"}
            hoverText={"hover:text-blue-500 "}
          />
        </div>
      )}
    </main>
  );
};

export default App;
