import React, { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Ing. Dr. Desmond Aryee-Boi",
      role: "President",
      company: "RM Foundation",
      description: "Ing. Dr. Desmond Aryee-Boi is a renowned Engineer, Professor/Specialist in Technical and Vocational Education and Training (TVET), and strategic leader with a distinguished track record in infrastructure development, project development and management, and governance. He previously served as the Executive Secretary of the Infrastructure Committee of 2024 Manifesto Group, member of the 2021 National Strategic Committee and lately the Vice-Chairman of the 2025-Transition Team in charge of Works, Housing and Water Resources.\n\nAs a founding member and first President of the Resource Mobilization Foundation, Dr. Aryee-Boi is the visionary behind several groundbreaking initiatives, including the RMF-Intel Unit, which is affiliated with National Security, as well as the Business Development and RMF Education & Training Units. His strategic foresight and leadership have positioned the RMF as a key player in resource mobilization, institutional transformation, and social empowerment in the country.\n\nBeyond his professional expertise, Dr. Aryee-Boi is deeply passionate about the well-being of the middle-class, recognizing their crucial role in nation-building. He is committed to empowering professionals and strengthening their economic resilience, while also supporting grassroots communities to ensure all-inclusive development, socio-economic mobility, and cohesive national progress and prosperity. His work continues to bridge the gap between economic classes, fostering a more equitable and prosperous society.",
      image: "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/leadership/Leader1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2xlYWRlcnNoaXAvTGVhZGVyMS5qcGciLCJpYXQiOjE3NDIzNjg3MzEsImV4cCI6MTc3MzkwNDczMX0.GDdSkLWvZ5lS6vMtwCYKfHLvXGvfjbPttyCP8I4ZI9o",
    },
    {
      id: 2,
      name: "Mr. Albert Acolatse",
      role: "Director of Operations",
      company: "RM Foundation",
      description: "Mr. Albert Acolatse is a seasoned banker and strategic operations expert with over 35 years of experience at the Central Bank. As a founding member of the Resource Mobilization Foundation, he is deeply committed to the foundation’s vision and mission, playing a pivotal role in shaping its operational success.\n\nAs Director of Operations, Mr. Acolatse has spearheaded numerous high-impact initiatives that have brought RMF into the national spotlight. His leadership extends beyond operations, as he is passionately empowering RMF’s inner caucuses within various institutions, ensuring they contribute positively to their workplaces while securing their well-being.\n\nWith a profound understanding of the middle-class and financial systems, gained through decades of banking experience, he effectively leverages this expertise to drive RMF’s strategic objectives. His dedication to social empowerment and institutional transformation continues to reinforce RMF’s influence in key sectors.",
      image: "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/leadership/Leader2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2xlYWRlcnNoaXAvTGVhZGVyMi5qcGciLCJpYXQiOjE3NDIzNjg1NDAsImV4cCI6MTc3MzkwNDU0MH0.YyFSKKBWQk76R-3rcGVzkwWMEZMj1qXYR23ADJQtxJY",
    },
    {
      id: 3,
      name: "Mr. Kojo Mensah",
      role: "General Secretary",
      company: "RM Foundation",
      description: "Mr. Kojo Mensah is a highly accomplished lawyer with many years of experience in corporate law, governance, and legal compliance. As a founding member of the Resource Mobilization Foundation (RMF), he has been deeply committed to advancing the foundation’s mission and objectives.\n\nIn his capacity as General Secretary, Mr. Mensah heads the RMF Secretariat, ensuring the smooth operation of the foundation’s administrative and legal framework. With his vast legal expertise, he plays a critical role in ensuring RMF's compliance with all legal obligations, overseeing regulatory matters, and safeguarding the foundation’s interests. He is also responsible for preparing and reviewing key operational documentation, ensuring that all agreements, contracts, and policies align with legal best practices.\n\nBeyond his legal responsibilities, Mr. Mensah ensures that all RMF meetings are well-organized, effectively coordinated, and properly documented. His meticulous approach to governance and administration ensures that RMF remains a structured, accountable, and impactful organization in its pursuit of resource mobilization and national development.",
      image: "https://aupshzcuqxjhnyoeydcw.supabase.co/storage/v1/object/sign/website/leadership/Leader3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2xlYWRlcnNoaXAvTGVhZGVyMy5qcGciLCJpYXQiOjE3NDIzNjg0NTQsImV4cCI6MTc3MzkwNDQ1NH0.dO4vm-0Q_H8uqTG5z9G9pkdfRblQy6LS51ozunGz0to",
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
            <pre className="meet-the-team-member-description">{member.description}</pre>
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