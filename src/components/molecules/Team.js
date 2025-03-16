import React, { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      company: "Tech Corp",
      description: "John is a visionary leader with over 15 years of experience in the tech industry.",
      image: "https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Head of Operations",
      company: "Innovate Inc",
      description: "Jane is a tech enthusiast with a PhD in Computer Science and a passion for innovation.",
      image: "https://th.bing.com/th/id/OIP.TvOvmhFdxni9z59d6yw1qgHaEJ?pid=ImgDet&w=206&h=115&c=7&dpr=1.3",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "CFO",
      company: "Finance Solutions",
      description: "Alice specializes in financial strategy and has a proven track record of success.",
      image: "https://th.bing.com/th/id/OIP.1_JnktlgABWfppl7opeYHQHaE7?pid=ImgDet&w=206&h=137&c=7&dpr=1.3",
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "COO",
      company: "Operations Hub",
      description: "Bob is an operations expert with a focus on efficiency and scalability.",
      image: "https://th.bing.com/th/id/OIP.G6Wvad15dENokHkjFOgOjAHaE7?pid=ImgDet&w=206&h=137&c=7&dpr=1.3",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <motion.div
      className="meet-the-team-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="meet-the-team-section-title">Meet the Team</h2>
      <p className="meet-the-team-section-subtitle">
        Our team of experts is dedicated to driving innovation and success.
      </p>

      <div className="meet-the-team-grid">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="meet-the-team-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="meet-the-team-profile-image"
            />
            <h3 className="meet-the-team-member-name">{member.name}</h3>
            <p className="meet-the-team-member-role">
              {member.role}, {member.company}
            </p>
            <p className="meet-the-team-member-description">{member.description}</p>
            <button
              className="meet-the-team-view-more-button"
              onClick={() => openModal(member)}
            >
              View More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="meet-the-team-modal-overlay" onClick={closeModal}>
          <motion.div
            className="meet-the-team-modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="meet-the-team-modal-profile-image"
            />
            <h3 className="meet-the-team-modal-member-name">{selectedMember.name}</h3>
            <p className="meet-the-team-modal-member-role">
              {selectedMember.role}, {selectedMember.company}
            </p>
            <p className="meet-the-team-modal-member-description">
              {selectedMember.description}
            </p>
            <button className="meet-the-team-close-modal-button" onClick={closeModal}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Team;