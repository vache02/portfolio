import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt; D.V /&gt;
        </motion.span>
        <div className="social">
          <a href="https://github.com/vache02" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/davit-vacheishvili-7610762a2/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100074389883368"
            target="_blank"
          >
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
