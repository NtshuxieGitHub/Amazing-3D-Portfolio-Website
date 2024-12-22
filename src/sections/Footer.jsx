const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Pivacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/NtshuxieGitHub">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://x.com/ConfidenceM3">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://www.instagram.com/ntshuxeko_mathebula/">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/ntshuxeko-mathebula">
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;