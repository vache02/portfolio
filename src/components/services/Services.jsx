import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          <br />
          My main goal is to transform your vision into reality by ensuring{" "}
          <br /> the highest quality and reliability of your software!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img src="/brainstorm.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#1e7e49" }}>Quality</motion.b>{" "}
            Assured
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#1e7e49" }}>Precision </motion.b>{" "}
            Delivered!
          </h1>
          <button>HOW CAN I DO? ⬃</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>HTML</motion.h2>
          <motion.img src="/html5.png" variants={variants} />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Css</motion.h2>
          <motion.img src="/css.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Javascript</motion.h2>
          <motion.img src="/javascript.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>React</motion.h2>
          <motion.img src="/react.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Redux Toolkit</motion.h2>
          <motion.img src="/redux.webp" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Testing Methodologies</motion.h2>
          <motion.img src="/testing.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>SQL</motion.h2>
          <motion.img src="/SQL.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Trying to learn more...</motion.h2>
          <motion.img src="/programmer.png" variants={variants} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
