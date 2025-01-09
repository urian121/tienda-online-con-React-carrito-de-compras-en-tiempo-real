import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaNpm,
  FaChrome,
  FaPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto del Footer */}
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; 2024{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.urianviera.com"
                className="text-white text-decoration-none"
              >
                Urian Viera
              </a>{" "}
              || Todos los derechos reservados.
            </p>
          </div>
          {/* Íconos Sociales */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="social-icons d-inline-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/urian121"
                className="text-white me-3"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/urian-viera"
                className="text-white me-3"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/WebDeveloperUrianViera"
                className="text-white me-3"
              >
                <FaYoutube />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.npmjs.com/package/nextjs-toast-notify"
                className="text-white me-3"
              >
                <FaNpm />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.urianviera.com/"
                className="text-white me-3"
              >
                <FaChrome />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE"
                className="text-white"
              >
                <FaPaypal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
