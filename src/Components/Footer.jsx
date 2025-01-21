const footerItems = [
  ["About Us", "Our Services", "Our Services", "Become a Partner"],
  ["Token", "Discussion", "Voting", "Blog", "Help Center"],
  ["Instagram", "Facebook", "Twitter"],
];

function Footer() {
  return (
    <section>
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 pb-5 md:py-16 md:px-20 text-center md:text-start font-DMSans">
          <div className="col-span-2 md:col-span-1">
            <img src="./Logo/logo.png" alt="logo" />
            <p className="mt-4">
              A marketplace that sells various types of work by professional
              designers and is paid with NFT tokens.
            </p>
          </div>
          <div className="hidden md:block" />
          <div>
            <b>About Us</b>
            <ul className="space-y-3 mt-4 text-sm text-white/70 cursor-pointer">
              {footerItems[0].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>About Us</b>
            <ul className="space-y-3 mt-4 text-sm text-white/70 cursor-pointer">
              {footerItems[1].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>About Us</b>
            <ul className="space-y-3 mt-4 text-sm text-white/70 cursor-pointer">
              {footerItems[2].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-center border-t border-white/15 p-5 text-white/50 font-Roboto">
          <p>Copyright @2023 Asra</p>
          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
