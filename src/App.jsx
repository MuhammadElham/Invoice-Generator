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
          <MainDetails name={name} address={address} />
          <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
          />
          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            dueDate={dueDate}
          />
          <Table />
          <Notes notes={notes} />
          <Footer
            name={name}
            email={email}
            phone={phone}
            bankName={bankName}
            bankAccount={bankAccount}
            website={website}
          />
          <Button
            onClick={() => setShowInvoice(false)}
            text={"Edit Invoice"}
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
          {/* Grid of 2 */}
          <article className="md:grid grid-cols-2 gap-10">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col">
              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                placeholder="Enter your address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="off"
              />
            </div>
          </article>
          {/* Grid of 3 */}
          <article className="md:grid grid-cols-3 gap-10">
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone">Enter your phone number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* Website */}
            <div className="flex flex-col">
              <label htmlFor="website">Enter your website</label>
              <input
                type="text"
                placeholder="Enter your website"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoComplete="off"
              />
            </div>
          </article>
          <article className="md:grid grid-cols-2 gap-10">
            {/* BankName */}
            <div className="flex flex-col">
              <label htmlFor="bankName">Enter your Bank Name</label>
              <input
                type="text"
                placeholder="Enter your Bank Name"
                id="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* BankAccount */}
            <div className="flex flex-col">
              <label htmlFor="bankAccount">Enter your Bank Account</label>
              <input
                type="text"
                placeholder="Enter your Bank Account"
                id="bankAccount"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                autoComplete="off"
              />
            </div>
          </article>
          {/* clientName */}
          <label htmlFor="clientName">Enter your client's name</label>
          <input
            type="text"
            placeholder="Enter your client's name"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            autoComplete="off"
          />
          {/* clientAddress */}
          <label htmlFor="clientAddress">Enter your client's address</label>
          <input
            type="text"
            placeholder="Enter your client's address"
            id="clientAddress"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            autoComplete="off"
          />
          {/* InvoiceNumber */}
          <label htmlFor="invoiceNumber">Enter your Invoice number</label>
          <input
            type="text"
            placeholder="Enter your Invoice number"
            id="invoiceNumber"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            autoComplete="off"
          />
          {/* InvoiceDate */}
          <label htmlFor="invoiceDate">Enter your Invoice date</label>
          <input
            type="date"
            placeholder="Enter your Invoice date"
            id="invoiceDate"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            autoComplete="off"
          />
          {/* DueDate */}
          <label htmlFor="dueDate">Enter your Due date</label>
          <input
            type="date"
            placeholder="Enter your Due date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            autoComplete="off"
          />
          {/* Notes */}
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows={30}
            cols={10}
            placeholder="Additional notes to the Client"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

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
