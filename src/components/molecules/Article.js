import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample data for articles
const articles = [
  {
    id: 1,
    image:
      "https://www.collidu.com/media/catalog/product/img/a/8/a865759486565746f1abf8861b2e8eceefb61e24e35c1915c64b825605ef42a0/resource-mobilization-slide7.png",
    title: "Card Title 1",
    description:
      "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
    date: "October 10, 2023",
    fullContent:
      "This is the full content of the article. It can include multiple paragraphs, images, and other details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.2PZP7dcVtaRfD9477npzxQHaE7?rs=1&pid=ImgDetMain",
    title: "Card Title 2",
    description:
      "This is another brief description of the card content. It will be cut off with an ellipsis if it's too long.",
    date: "October 12, 2023",
    fullContent:
      "This is the full content of the second article. It can include multiple paragraphs, images, and other details. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image:
      "https://thumbs.dreamstime.com/b/african-workers-ruhengeri-rwanda-november-unidentified-people-working-fields-ruhengeri-rwanda-november-50118104.jpg",
    title: "Card Title 3",
    description:
      "This is yet another brief description of the card content. It will be cut off with an ellipsis if it's too long.",
    date: "October 15, 2023",
    fullContent:
      "This is the full content of the third article. It can include multiple paragraphs, images, and other details. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/OIP.CeqPAD5GlFTAgGNxwByVPQHaE8?rs=1&pid=ImgDetMain",
    title: "Card Title 4",
    description:
      "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
    date: "October 18, 2023",
    fullContent:
      "This is the full content of the fourth article. It can include multiple paragraphs, images, and other details. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/28593053/pexels-photo-28593053/free-photo-of-young-boy-drinking-water-from-rusty-tap-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 5",
    description:
      "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
    date: "October 20, 2023",
    fullContent:
      "This is the full content of the fifth article. It can include multiple paragraphs, images, and other details. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Article = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Function to open the modal with the selected article
  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="all-articles-articles-page">
          <div className="all-articles-articles-header">
            <h1>Articles</h1>
            <button
              className="all-articles-back-button"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>

          <div className="all-articles-articles-grid">
            {articles.map((article) => (
              <div key={article.id} className="all-articles-article-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="all-articles-article-image"
                />
                <div className="all-articles-article-content">
                  <h2 className="all-articles-article-title">
                    {article.title}
                  </h2>
                  <p className="all-articles-article-description">
                    {article.description}
                  </p>
                  <p className="all-articles-article-date">{article.date}</p>
                  <button
                    className="all-articles-read-more-button"
                    onClick={() => handleReadMore(article)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for displaying full article content */}
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Article Modal"
            className="article-modal"
            overlayClassName="article-modal-overlay"
          >
            {selectedArticle && (
              <div className="article-modal-content">
                <h2>{selectedArticle.title}</h2>
                <p className="article-modal-date">{selectedArticle.date}</p>
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="modal-image"
                />
                <p className="article-modal-full-content">
                  {selectedArticle.fullContent}
                </p>
                <button
                  className="article-close-modal-button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </ReactModal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
