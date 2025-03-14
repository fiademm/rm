import React from "react";
import { useNavigate } from "react-router-dom";

const Leadership = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
      fullName: "John Doe",
      jobRole: "Software Engineer",
      company: "Tech Corp",
      description: "John is a passionate software engineer with expertise in React and Node.js.",
    },
    {
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
      fullName: "Jane Smith",
      jobRole: "Product Manager",
      company: "Innovate Inc",
      description: "Jane is a product manager with a focus on user-centered design and agile methodologies.",
    },
    {
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
      fullName: "Alice Johnson",
      jobRole: "Data Scientist",
      company: "DataWorks",
      description: "Alice specializes in machine learning and big data analytics.",
    },
    {
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
      fullName: "Bob Brown",
      jobRole: "UX Designer",
      company: "Design Studio",
      description: "Bob is a creative UX designer with a passion for intuitive user interfaces.",
    },
    {
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
      fullName: "Charlie Davis",
      jobRole: "DevOps Engineer",
      company: "Cloud Solutions",
      description: "Charlie is an expert in CI/CD pipelines and cloud infrastructure.",
    },
  ];

  // Function to handle "View All" button click
  const handleViewAll = () => {
    navigate("/Leadership"); // Redirect to the "View All" page
  };

  return (
    <div className="leadership-profile-cards-section">
      <div className="leadership-section-header">
        <h2 className="leadership-section-title">Our Team</h2>
        <button className="leadership-view-all-button" onClick={handleViewAll}>
          View Team Members
        </button>
      </div>
      {/* <p className="leadership-section-subtitle">Meet the talented individuals behind our success.</p> */}
      <div className="leadership-cards-container">
        {profiles.map((profile, index) => (
          <div key={index} className="leadership-card">
            <img src={profile.image} alt={profile.fullName} className="leadership-card-image" />
            <div className="leadership-card-content">
              <h3 className="leadership-card-fullname">{profile.fullName}</h3>
              <p className="leadership-card-job-role">{profile.jobRole}, {profile.company}</p>
              <p className="leadership-card-description">{profile.description}</p>
              <button className="leadership-read-more-button" onClick={() => alert(`Read more about: ${profile.fullName}`)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;