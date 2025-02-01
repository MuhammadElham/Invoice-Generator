import React from "react";

const Footer = ({ name, email, website, phone, bankName, bankAccount }) => {
  return (
    <div>
      <footer>
        <ul className="flex items-center justify-center flex-wrap gap-5">
          <li>
            <span className="font-bold">Your name: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Your email: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">Phone number: </span>
            {phone}
          </li>
          <li>
            <span className="font-bold">Bank: </span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account number: </span>
            {bankAccount}
          </li>
          <li>
            <span className="font-bold">Website: </span>
            <a href={website} target="_blank">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
