import React from "react";

const Header = ({handlePrint}) => {
  return (
    <div>
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
              <button
                className="btn btn-print cursor-pointer"
                onClick={handlePrint}
              >
                Print
              </button>
            </li>
            <li>
              <button className="btn btn-download cursor-pointer">
                Download
              </button>
            </li>
            <li>
              <button className="btn btn-send cursor-pointer">Send</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
