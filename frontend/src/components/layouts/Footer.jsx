import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="py-1">
        <p className="text-center mt-1">
         Copyright &copy; ShopIT - {new Date().getFullYear()}, All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer
