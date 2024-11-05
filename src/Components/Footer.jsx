import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-white flex flex-col items-center justify-center gap-8 text-base-content p-10">
  <div className="w-full flex flex-col gap-3 items-center justify-center">
    <h2 className="font-bold text-2xl text-black">Gadget Heaven</h2>
    <p className="font-semibold text-base text-black">Leading the way in cutting-edge technology and innovation.</p>
  </div>
  <div className="flex justify-around w-full">
    <nav className="flex flex-col gap-3">
      <h6 className="footer-title font-bold text-lg">Our Products</h6>
      <Link className="link link-hover font-semibold text-sm text-black">Laptops</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Mobile</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Iphone</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Watch</Link>
    </nav>
    <nav className="flex flex-col gap-3">
      <h6 className="footer-title font-bold text-lg">Pages</h6>
      <Link to='/' className="link link-hover font-semibold text-sm text-black">Home</Link>
      <Link to='/statistics' className="link link-hover font-semibold text-sm text-black">Statistics</Link>
      <Link to='/dashboard'  className="link link-hover font-semibold text-sm text-black">Dashboard</Link>
    </nav>
    <nav className="flex flex-col gap-3">
      <h6 className="footer-title font-bold text-lg">Legal</h6>
      <Link className="link link-hover font-semibold text-sm text-black">Terms of use</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Privacy policy</Link>
    </nav>
  </div>
</footer>
  );
};

export default Footer;