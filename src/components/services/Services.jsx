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
          My main goal is to transform your wish into reality by <br /> building
          the coolest website!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img src="/brainstorm.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#1e7e49" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#1e7e49" }}>For Your</motion.b>{" "}
            Business.
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
          <motion.img src="../../../public/html5.png" variants={variants} />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Css</motion.h2>
          <motion.img src="/public/css.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Javascript</motion.h2>
          <motion.img src="/public/javascript.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>React</motion.h2>
          <motion.img src="/public/react.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Redux Toolkit</motion.h2>
          <motion.img src="/public/redux.webp" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>React Query</motion.h2>
          <motion.img src="/public/rquery.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Tailwind Css</motion.h2>
          <motion.img src="/public/tailwind.png" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Styled Components</motion.h2>
          <motion.img src="/public/styled.webp" />
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.h2 variants={variants}>Trying to learn more...</motion.h2>
          <motion.img src="/public/programmer.png" variants={variants} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
