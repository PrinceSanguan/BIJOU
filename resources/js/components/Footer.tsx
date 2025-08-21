

export function Footer() {
  return (
    <footer className="w-full bg-[#0E5248] text-white py-8 px-4 font-space">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left: Logo and Contact */}
        <div className="flex flex-col md:w-1/3 gap-2">
          <div className="flex items-center gap-3 mb-2">
            <img src="/images/Circular logo.png" alt="Bijou Group Logo" className="w-12 h-12 bg-white rounded-full p-1" />
            <span className="text-[#EFBF04] text-lg font-bold tracking-wide">BIJOU GROUP</span>
          </div>
          <div className="text-sm leading-relaxed text-white">
            70 Clarkehouse Road, Sheffield, South<br />
            Yorkshire, England, S10 2LJ
          </div>
          <div className="flex gap-8 mt-2 text-sm">
            <div>
              <div className="text-white">Phone number</div>
              <div className="text-white">+447495747930</div>
            </div>
            <div>
              <div className="text-white">Email</div>
              <div className="text-white">info@bijourelocation.co.uk</div>
            </div>
          </div>
        </div>

        {/* Center: Quick Links & Socials & Legal */}
        <div className="flex flex-1 flex-wrap justify-between md:justify-end gap-8">
          <div>
            <div className="font-bold mb-2 text-white">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-white">Socials</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-white">Legal</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Terms of Service</a></li> 
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="text-xs text-white font-space text-centpublic/images/Circular logo.pnger">
          © <a href="https://choros.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#EFBF04]">Choros.io</a> 2025 | All rights reserved.
        </div>
      </div>
    </footer>
  );
}