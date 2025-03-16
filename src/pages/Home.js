import React from "react";
import Footer from "../components/Footer";
import Socials from "../components/molecules/Socials";
import Navbar from "../components/Navbar";
import Slideshow from "../components/molecules/Slideshow";
import Vision from "../components/molecules/Vision";
import Team from "../components/molecules/Team";
import Articles from "../components/molecules/Articles";

const Home = () => {
  const images = [
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
  ];

  const articles = [
    {
      title: "The Future of AI",
      description:
        "Exploring how artificial intelligence is transforming industries.",
      date: "October 10, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Sustainable Living",
      description: "Tips and tricks for adopting a more sustainable lifestyle.",
      date: "October 12, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Space Exploration",
      description:
        "The latest advancements in space technology and exploration.",
      date: "October 15, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Healthy Eating Habits",
      description: "How to maintain a balanced diet for a healthier life.",
      date: "October 18, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "The Rise of Remote Work",
      description: "How remote work is changing the way we work and live.",
      date: "October 20, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Blockchain Technology",
      description:
        "Understanding the potential of blockchain beyond cryptocurrencies.",
      date: "October 22, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Mental Health Awareness",
      description:
        "The importance of mental health in today's fast-paced world.",
      date: "October 25, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
    {
      title: "Renewable Energy",
      description:
        "How renewable energy is shaping the future of power generation.",
      date: "October 28, 2023",
      image:
        "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    },
  ];

  return (
    <>
      <div classname="screen-container">
        <Navbar />
        <div id="home" className="content">
          <Slideshow articles={articles} />
        </div>
        <div className="content">
          <Vision />
        </div>
        <div id="articles" className="content">
          <Articles />
        </div>
        {/* <div id="leadership" className="content">
          <Leadership />
        </div> */}
        <div id="Leadership" className="content">
          <Team />
        </div>
        <Socials />
        <Footer />
      </div>
    </>
  );
};

export default Home;