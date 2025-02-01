import React from "react";

const Footer = ({ name, email, website }) => {
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
            <span className="font-bold">Phone number: </span>+92 2762118
          </li>
          <li>
            <span className="font-bold">Bank: </span>MCB
          </li>
          <li>
            <span className="font-bold">Account holder: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account number: </span>123 456 789
          </li>
          <li>
            <span className="font-bold">Website: </span>
            <a href={website} target="_blank">{website}</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
