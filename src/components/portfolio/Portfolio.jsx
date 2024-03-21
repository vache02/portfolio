import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageGallery from "./ImageGallery";

const items = [
  {
    id: 1,
    title: "The Wild Oasis",
    img: "/wildoasis.png",
    desc: 'This is a admin panel for the hotel called "the wild oasis",which gives you controll to manage guest arrivals and departures, also you can see different stats like moneyflow and working rate.Biggest project so far.To see the work use: test@gmail.com pass: 12345678',
    toolpics: [
      "/html5.png",
      "/css.png",
      "/javascript.png",
      "/react.png",
      "/rquery.png",
      "/redux.webp",
      "/styled.webp",
    ],
    live: "https://6568503d7abd4601c13f3788--the-wild-oas1s.netlify.app/dashboard",
    code: "https://github.com/vache02/the-wild-oasis",
  },
  {
    id: 2,
    title: "Forkify",
    img: "/forkify.png",
    desc: "you can search over 1000,000 recipe, bookmark them for later use and  also you can make recipe on your own ;)",
    toolpics: ["/html5.png", "/css.png", "/javascript.png"],
    live: "https://fork-1fy.netlify.app/",
    code: "https://github.com/vache02/Forkify",
  },
  {
    id: 3,
    title: "UsePopcorn",
    img: "/usepopcorn1.png",
    desc: "In this application you can search for movies,see the short description, rate and save them to watch later.",
    toolpics: ["/html5.png", "/css.png", "/javascript.png", "/react.png"],
    live: "https://use-popcorn2.netlify.app/",
    code: "https://github.com/vache02/usepopcorn-final",
  },
  {
    id: 4,
    title: "Bankist",
    img: "/bankist.png",
    desc: "Modern web application with sticky navbar,modal window and slider.You can use this App for implementing features like: lazy loading,slider,modal window and sticky navbar to your application as well.",
    toolpics: ["/html5.png", "/css.png", "/javascript.png"],
    live: "https://bank-1st.netlify.app/",
    code: "https://github.com/vache02/Bankist",
  },
  {
    id: 5,
    title: "Hoobank",
    img: "/hoobank.png",
    desc: "Saw the cool design and tried to develope my skills in tailwind-css,design itself is relly nice.",
    toolpics: [
      "/html5.png",
      "/css.png",
      "/javascript.png",
      "/react.png",
      "/tailwind.png",
    ],
    live: "https://hoo-0bank.netlify.app/",
    code: "https://github.com/vache02/HooBank",
  },
  {
    id: 6,
    title: "Travel List",
    img: "/travel.png",
    desc: "application helps you to plan and collect things that you need for a travel ))",
    toolpics: ["/html5.png", "/css.png", "/javascript.png", "/react.png"],
    live: "https://trvel-l1st.netlify.app/",
    code: "https://github.com/vache02/travel-list",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <a href={item.live}>
              <img src={item.img} alt="" />
            </a>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="links">
              <a href={item.live} target="_blank">
                See live
              </a>
              <a href={item.code} target="_blank">
                See Code
              </a>
            </div>

            <div className="toolpicsContainer">
              <ImageGallery imageArray={item.toolpics} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
