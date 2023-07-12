import React from "react";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright - Syed Owais Nawaz {year}</p>
    </footer>
  );
}

export default Footer;
