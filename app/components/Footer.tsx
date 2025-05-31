const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Syed Sibtain
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="https://github.com/SyedSibtainRazvi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline underline-offset-4"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/syed-sibtain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline underline-offset-4"
            >
              LinkedIn
            </a>

            <a
              href="https://syedsibtain.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Hashnode
            </a>

            <a
              href="https://syedsibtain.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
