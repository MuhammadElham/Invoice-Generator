import React from "react";
import Button from "./Shared/Button";

const Header = ({ handlePrint }) => {
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
          <ul className="flex items-center sm:justify-between flex-wrap sm:gap-5 gap-3">
            <li>
              <Button
                onClick={handlePrint}
                text={"Print"}
                bgColor={"bg-gray-500"}
                textColor={"text-white"}
                borderColor={"border-gray-500"}
                hoverBg={"hover:bg-transparent"}
                hoverText={"hover:text-gray-500 "}
                mt="mt-0"
                className="btn btn-print"
              />
            </li>
            <li>
              <Button
                text={"Download"}
                bgColor={"bg-blue-500"}
                textColor={"text-white"}
                borderColor={"border-blue-500"}
                hoverBg={"hover:bg-transparent"}
                hoverText={"hover:text-blue-500 "}
                mt="mt-0"
                className="btn btn-download"
              />
            </li>
            <li>
              <Button
                text={"Send"}
                bgColor={"bg-green-500"}
                textColor={"text-white"}
                borderColor={"border-green-500"}
                hoverBg={"hover:bg-transparent"}
                hoverText={"hover:text-green-500 "}
                mt="mt-0"
                className="btn btn-send"
              />
              {/* <button className="btn btn-send cursor-pointer">Send</button> */}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
