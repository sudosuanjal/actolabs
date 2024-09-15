import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 text-lg">
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 ">
        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L1 21h22L12 2zm0 3.83L19.13 19H4.87L12 5.83z" />
            </svg>
            <span className="text-lg font-semibold">aocto labs</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/about" className="hover:underline">
              About us
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/use-cases" className="hover:underline">
              Use Cases
            </a>
            <a href="/pricing" className="hover:underline">
              Pricing
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
        <h2 className="text-purple-500 font-bold mb-4 px-2">Contact us:</h2>
        <div className="flex flex-col md:flex-row justify-between px-2">
          <div className="mb-8 md:mb-0 flex flex-col gap-4">
            <p>Email: info@aoctolabs.com</p>
            <p>Phone: 555-567-8901</p>
            <div>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 text-white p-3 rounded-md mb-4"
              />
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300">
                Subscribe to newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Aoctlabs. All Rights Reserved.</p>
          <a href="/privacy-policy" className="mt-4 md:mt-0 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
