const Footer = () => {
  return (
    <div className="m-auto md:pl-20 p-4 py-5 text-center text-black">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} The Golang Way. All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
