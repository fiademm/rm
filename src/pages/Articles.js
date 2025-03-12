import React from "react";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();

  // Sample data for cards
  const cards = [
    {
      image:
        "https://www.collidu.com/media/catalog/product/img/a/8/a865759486565746f1abf8861b2e8eceefb61e24e35c1915c64b825605ef42a0/resource-mobilization-slide7.png",
      title: "Card Title 1",
      description:
        "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
      date: "October 10, 2023",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.2PZP7dcVtaRfD9477npzxQHaE7?rs=1&pid=ImgDetMain",
      title: "Card Title 2",
      description:
        "This is another brief description of the card content. It will be cut off with an ellipsis if it's too long.",
      date: "October 12, 2023",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/african-workers-ruhengeri-rwanda-november-unidentified-people-working-fields-ruhengeri-rwanda-november-50118104.jpg",
      title: "Card Title 3",
      description:
        "This is yet another brief description of the card content. It will be cut off with an ellipsis if it's too long.",
      date: "October 15, 2023",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.CeqPAD5GlFTAgGNxwByVPQHaE8?rs=1&pid=ImgDetMain",
      title: "Card Title 4",
      description:
        "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
      date: "October 18, 2023",
    },
    {
      image:
        "https://images.pexels.com/photos/28593053/pexels-photo-28593053/free-photo-of-young-boy-drinking-water-from-rusty-tap-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Card Title 5",
      description:
        "This is a brief description of the card content. It will be cut off with an ellipsis if it's too long.",
      date: "October 20, 2023",
    },
  ];

  // Function to handle "View All" button click
  const handleViewAll = () => {
    navigate("/Articles"); // Redirect to the "View All" page
  };

  return (
    <div className="scrollable-cards-section">
      <div className="section-header">
        <h2 className="section-title">Articles</h2>
        {/* <p className="section-subtitle">Get more insights on what RM Foundation does...</p> */}
        <button className="view-all-button" onClick={handleViewAll}>
          View All
        </button>
      </div>
      <div className="article-cards-container">
        {cards.map((card, index) => (
          <div key={index} className="article-card">
            <img src={card.image} alt={card.title} className="article-card-image" />
            <div className="article-card-content">
              <h3 className="article-card-title">{card.title}</h3>
              <p className="article-card-description">{card.description}</p>
              <p className="article-card-date">{card.date}</p>
              <button
                className="article-read-more-button"
                onClick={() => alert(`Read more about: ${card.title}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
