import React from "react";

const App = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded-md shadow">
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        {/* Heading */}
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoicer
          </h1>
        </div>
        {/* Buttons */}
        <div>
          <ul className="flex items-center justify-between flex-wrap gap-5">
            <li>
              <button className="btn btn-print cursor-pointer" onClick={handlePrint}>
                Print
              </button>
            </li>
            <li>
              <button className="btn btn-download cursor-pointer">Download</button>
            </li>
            <li>
              <button className="btn btn-send cursor-pointer">Send</button>
            </li>
          </ul>
        </div>
      </header>
      {/* Your Detials */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Muhammad Elham Waheed</h2>
        <p>Your Address</p>
      </section>
      {/* Client Details */}
      <section className="mt-5">
        <h2 className="text-xl uppercase">Client's Name</h2>
        <p>Client Address</p>
      </section>
      {/* Dates */}
      <section>
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoice number: </span>
            </li>
            <li>
              <span className="font-bold">Invoice date: </span>
            </li>
            <li>
              <span className="font-bold">Due date: </span>
            </li>
          </ul>
        </article>
      </section>
      {/* Table */}
      <div className="mb-5">this is the table</div>
      {/* Textarea */}
      <section className="mb-5">
        <p>Notes to the client...</p>
      </section>
      {/* All Details */}
      <footer>
        <ul className="flex items-center justify-center flex-wrap gap-5">
          <li>
            <span className="font-bold">Your name: </span>Muhammad Elham Waheed
          </li>
          <li>
            <span className="font-bold">Your email: </span>
            elhamwheed777@gmil.com
          </li>
          <li>
            <span className="font-bold">Phone number: </span>+92 2762118
          </li>
          <li>
            <span className="font-bold">Bank: </span>MCB
          </li>
          <li>
            <span className="font-bold">Account holder: </span>Muhammad Elham
            Waheed
          </li>
          <li>
            <span className="font-bold">Account number: </span>123 456 789
          </li>
          <li>
            <span className="font-bold">Website: </span>https:elham.framer.ai
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default App;
