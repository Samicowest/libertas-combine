
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 py-10">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <a 
            href="#" 
            className="font-montserrat font-semibold text-blocksquare-lightBlue hover:text-white transition-colors"
          >
            Blocksquare
          </a>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-xs hover:text-blocksquare-lightBlue transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-xs hover:text-blocksquare-lightBlue transition-colors"
            >
              Terms of Service
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-lg hover:text-blocksquare-lightBlue transition-colors">📘</a>
            <a href="#" className="text-lg hover:text-blocksquare-lightBlue transition-colors">🐦</a>
            <a href="#" className="text-lg hover:text-blocksquare-lightBlue transition-colors">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
