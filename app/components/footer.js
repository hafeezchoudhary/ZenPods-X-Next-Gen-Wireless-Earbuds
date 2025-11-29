import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="mt-12 border-t border-[#BBDEFB] bg-[#E3F2FD]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#1976D2] text-white flex items-center justify-center font-semibold">ZP</div>
            <div className="font-semibold text-[#0A2540]">ZenPods X</div>
          </div>

          <p className="text-sm text-[#0A2540]/70">
            Premium wireless earbuds designed for music lovers, commuters, and creators.
          </p>
        </div>

        <div className="flex gap-12">
          <div className='flex flex-col gap-2 text-sm text-[#0A2540]/70'>
            <div className="font-semibold text-[#0A2540] mb-2">Product</div>
              <a className="hover:text-[#1976D2] cursor-pointer">Features</a>
              <a className="hover:text-[#1976D2] cursor-pointer">Pricing</a>
              <a className="hover:text-[#1976D2] cursor-pointer">Support</a>
          </div>

          <div>
            <div className="font-semibold text-[#0A2540] mb-2">Company</div>
            <div className="text-sm text-[#0A2540]/70 flex flex-col gap-2">
              <a className="hover:text-[#1976D2] cursor-pointer">About</a>
              <a className="hover:text-[#1976D2] cursor-pointer">Careers</a>
              <a className="hover:text-[#1976D2] cursor-pointer">Privacy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#BBDEFB]">
        <div className="max-w-6xl mx-auto flex justify-center px-6 py-4 text-sm text-[#0A2540]/60 flex-col sm:flex-row items-center">
          <div>© {new Date().getFullYear()} ZenPods. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
