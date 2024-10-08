
const Footer = () => {
  return (
    <footer className=" text-gray-800 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Footer Left (Brand & Copyright) */}
          <div className="mb-4 md:mb-0">
            {/* <a href="/" className="text-2xl font-bold text-white hover:text-blue-400">
              ScriptX
            </a> */}
            <p className="text-gray-400 mt-1">© 2024 built with love, charles gobina</p>
          </div>

          {/* Footer Right (Links) */}
          {/* <div className="space-x-4">
            <a href="/terms" className="text-gray-400 hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
