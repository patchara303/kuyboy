const Footer = () => {
    return (
        <footer className="bg-[#00CC82] text-white p-6 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="font-bold text-lg">Fruit For You</h2>
          <p className="mt-2">Follow Us On Social</p>
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a href="#" className="text-xl">📘</a>
            <a href="#" className="text-xl">📷</a>
            <a href="#" className="text-xl">▶</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Help?</h3>
          <ul className="mt-2">
            <li><a href="#" className="hover:underline">ประวัติการซื้อ</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">เกี่ยวกับเรา</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="mt-2">📞 0683951232</p>
          <p>📍 Fruitforyou.official</p>
          <p>🕙 ให้บริการ 10.00 - 18.00 น.</p>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer;
  