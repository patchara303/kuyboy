import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";

const Navbar = () => {
    const [langDropdown, setLangDropdown] = useState(false);
    const [language, setLanguage] = useState("TH");
  return (
    <nav className="bg-[#00CC82] text-white py-3 shadow-md">
      <div className="container mx-auto flex flex-col items-center px-8">
        {/* Top Section: โลโก้ + เมนู + ไอคอน */}
        <div className="w-full flex justify-between items-center">
          {/* โลโก้ */}
          <Link to="/" className="text-3xl font-bold font-bold hover:opacity-80">
          Fruit For You
          </Link>

          {/* เมนูหลัก */}
          <div className="hidden md:flex space-x-6 text-xl font-medium">
            <a href="#" className="hover:underline">หมวดหมู่ผลไม้</a>
            <a href="#" className="hover:underline">ร่วมธุรกิจกับเรา</a>
          </div>

          {/* ไอคอน และปุ่ม */}
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="cursor-pointer text-xl" />
            <FaBell className="cursor-pointer text-xl" />

            {/* ปุ่มเลือกภาษา */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 cursor-pointer text-xl"
                onClick={() => setLangDropdown(!langDropdown)}
              >
                <span>{language}</span>
                <span>▼</span>
              </button>

              {/* Dropdown Language Menu */}
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded-lg shadow-lg z-50">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    onClick={() => {
                      setLanguage("TH");
                      setLangDropdown(false);
                    }}
                  >
                    TH
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    onClick={() => {
                      setLanguage("EN");
                      setLangDropdown(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            {/* ปุ่มเข้าสู่ระบบ */}
            <Link to="/login" className="hover:underline text-xl">
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>

        {/* ช่องค้นหา */}
        <div className="relative w-full flex justify-center mt-3">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-10 rounded-full text-black shadow-sm focus:outline-none"
            placeholder="ค้นหา"
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
