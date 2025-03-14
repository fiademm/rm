// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LeaderSet = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="view-all-page">
//       <h1>View All Page</h1>
//       <p>This is the page where all profiles will be displayed.</p>
//       <button onClick={() => navigate("/")}>Go Back</button>
//     </div>
//   );
// };

// export default LeaderSet;

import React, { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample data for members
const profiles = [
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    fullName: "John Doe",
    jobRole: "Software Engineer",
    company: "Tech Corp",
    description:
      "John is a passionate software engineer with expertise in React and Node.js.",
    fullDetails:
      "John Doe has over 10 years of experience in software development. He specializes in building scalable web applications and has contributed to several open-source projects.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    fullName: "Jane Smith",
    jobRole: "Product Manager",
    company: "Innovate Inc",
    description:
      "Jane is a product manager with a focus on user-centered design and agile methodologies.",
    fullDetails:
      "Jane Smith has a proven track record of delivering successful products. She is skilled in stakeholder management and agile project delivery.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    fullName: "Alice Johnson",
    jobRole: "Data Scientist",
    company: "DataWorks",
    description:
      "Alice specializes in machine learning and big data analytics.",
    fullDetails:
      "Alice Johnson holds a PhD in Data Science and has worked on cutting-edge AI projects. She is passionate about leveraging data to solve real-world problems.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    fullName: "Bob Brown",
    jobRole: "UX Designer",
    company: "Design Studio",
    description:
      "Bob is a creative UX designer with a passion for intuitive user interfaces.",
    fullDetails:
      "Bob Brown has over 8 years of experience in UX design. He has worked with global brands to create user-friendly digital experiences.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    fullName: "Charlie Davis",
    jobRole: "DevOps Engineer",
    company: "Cloud Solutions",
    description:
      "Charlie is an expert in CI/CD pipelines and cloud infrastructure.",
    fullDetails:
      "Charlie Davis is a certified DevOps engineer with expertise in AWS, Docker, and Kubernetes. He has streamlined deployment processes for multiple organizations.",
  },
];

const LeaderSet = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Function to open the modal with the selected member
  const handleReadMore = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="leaderset-page">
          <div className="leaderset-header">
            <h1>Our Leadership</h1>
            <button
              className="leaderset-back-button"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>

          <div className="leaderset-grid">
            {profiles.map((profile, index) => (
              <div key={index} className="leaderset-card">
                <img
                  src={profile.image}
                  alt={profile.fullName}
                  className="leadership-card-image"
                />
                <div className="leaderset-card-content">
                  <h2 className="leaderset-card-fullname">
                    {profile.fullName}
                  </h2>
                  <p className="leaderset-card-job-role">
                    {profile.jobRole}, {profile.company}
                  </p>
                  <p className="leaderset-card-description">
                    {profile.description}
                  </p>
                  <button
                    className="leaderset-read-more-button"
                    onClick={() => handleReadMore(profile)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for displaying full member details */}
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Member Modal"
            className="leaderset-modal"
            overlayClassName="leaderset-modal-overlay"
          >
            {selectedMember && (
              <div className="leaderset-modal-content">
                <h2>{selectedMember.fullName}</h2>
                <p className="leaderset-modal-job-role">
                  {selectedMember.jobRole}, {selectedMember.company}
                </p>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.fullName}
                  className="leaderset-modal-image"
                />
                <p className="leaderset-modal-full-details">
                  {selectedMember.fullDetails}
                </p>
                <button
                  className="leaderset-close-modal-button"
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

export default LeaderSet;
