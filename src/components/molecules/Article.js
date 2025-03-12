import React from "react";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();

  return (
    <div className="view-all-page">
      <h1>View All Page</h1>
      <p>This is the page where all cards will be displayed.</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default Article;