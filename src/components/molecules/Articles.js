import React, { useState } from "react";
import { motion } from "framer-motion";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
        id: 1,
        title: "Article Title 1",
        description: "This is a brief description of the article content.",
        date: "October 10, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.Tm4MFmDm9Oo-YzkKukWaYwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.15PR0uT57GmrPr79FGhYzgHaD2?w=333&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 2,
        title: "Article Title 2",
        description: "This is another brief description of the article content.",
        date: "October 12, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.Tm4MFmDm9Oo-YzkKukWaYwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 3,
        title: "Article Title 3",
        description:
          "This is yet another brief description of the article content.",
        date: "October 15, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.0Af0ywSPdFarCeg6FK2ezwHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.TKejWuoc4cao5qhZfzAYDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.UETnKlSGR8LBUAYZ7AawpgHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 4,
        title: "Article Title 3",
        description:
          "This is yet another brief description of the article content.",
        date: "October 15, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.0Af0ywSPdFarCeg6FK2ezwHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.TKejWuoc4cao5qhZfzAYDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.UETnKlSGR8LBUAYZ7AawpgHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 5,
        title: "Article Title 3",
        description:
          "This is yet another brief description of the article content.",
        date: "October 15, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.0Af0ywSPdFarCeg6FK2ezwHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.TKejWuoc4cao5qhZfzAYDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.UETnKlSGR8LBUAYZ7AawpgHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 6,
        title: "Article Title 3",
        description:
          "This is yet another brief description of the article content.",
        date: "October 15, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.0Af0ywSPdFarCeg6FK2ezwHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.TKejWuoc4cao5qhZfzAYDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.UETnKlSGR8LBUAYZ7AawpgHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
      {
        id: 7,
        title: "Article Title 3",
        description:
          "This is yet another brief description of the article content.",
        date: "October 15, 2023",
        images: [
          "https://th.bing.com/th/id/OIP.0Af0ywSPdFarCeg6FK2ezwHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.TKejWuoc4cao5qhZfzAYDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.UETnKlSGR8LBUAYZ7AawpgHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        ],
      },
    ];

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <motion.div
        className="articles-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="articles-section-title">Articles</h2>
        <p className="articles-section-subtitle">
          Explore our latest articles and insights.
        </p>

        <div className="articles-horizontal-scroll-container">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="articles-article-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={article.images[0]}
                alt={article.title}
                className="articles-article-image"
              />
              <h3 className="articles-article-title">{article.title}</h3>
              <p className="articles-article-description">
                {article.description}
              </p>
              <p className="articles-article-date">{article.date}</p>
              <button
                className="articles-view-article-button"
                onClick={() => openModal(article)}
              >
                View Article
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedArticle && (
          <div className="articles-modal-overlay" onClick={closeModal}>
            <motion.div
              className="articles-modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="articles-slideshow-container">
                {selectedArticle.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="articles-slideshow-image"
                  />
                ))}
              </div>
              <h3 className="articles-modal-article-title">
                {selectedArticle.title}
              </h3>
              <p className="articles-modal-article-description">
                {selectedArticle.description}
              </p>
              <p className="articles-modal-article-date">{selectedArticle.date}</p>
              <button className="articles-close-modal-button" onClick={closeModal}>
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Articles;
