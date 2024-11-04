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
      <h6 className="footer-title font-bold text-lg">Services</h6>
      <Link className="link link-hover font-semibold text-sm text-black">Branding</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Design</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Marketing</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Advertisement</Link>
    </nav>
    <nav className="flex flex-col gap-3">
      <h6 className="footer-title font-bold text-lg">Company</h6>
      <Link className="link link-hover font-semibold text-sm text-black">About us</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Contact</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Jobs</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Press kit</Link>
    </nav>
    <nav className="flex flex-col gap-3">
      <h6 className="footer-title font-bold text-lg">Legal</h6>
      <Link className="link link-hover font-semibold text-sm text-black">Terms of use</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Privacy policy</Link>
      <Link className="link link-hover font-semibold text-sm text-black">Cookie policy</Link>
    </nav>
  </div>
</footer>
  );
};

export default Footer;