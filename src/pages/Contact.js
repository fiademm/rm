// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef(); // Use a ref for the form
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   // Handle form submission
//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Use environment variables for sensitive data
//     const serviceID = process.env.SERVICE_ID;
//     const templateID = process.env.TEMPLATE_ID;
//     const publicKey = process.env.PUBLIC_KEY;

//     emailjs
//       .sendForm(serviceID, templateID, form.current, {
//         publicKey: publicKey,
//       })
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           setSubmitStatus("success");
//           form.current.reset(); // Reset the form
//         },
//         (error) => {
//           console.error("Failed to send email:", error.text);
//           setSubmitStatus("error");
//         }
//       )
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <motion.div
//       className="contact-us-container"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h1 className="contact-us-title">Contact Us</h1>
//       <p className="contact-us-subtitle">
//         We'd love to hear from you! Please fill out the form below.
//       </p>

//       <form ref={form} onSubmit={sendEmail} className="contact-form">
//         <motion.div
//           className="form-group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <label htmlFor="user_name">Name</label>
//           <input
//             type="text"
//             id="user_name"
//             name="user_name"
//             required
//           />
//         </motion.div>

//         <motion.div
//           className="form-group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <label htmlFor="user_email">Email</label>
//           <input
//             type="email"
//             id="user_email"
//             name="user_email"
//             required
//           />
//         </motion.div>

//         <motion.div
//           className="form-group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             required
//           />
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="submit-button"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Sending..." : "Submit"}
//         </motion.button>

//         {submitStatus === "success" && (
//           <p className="submit-success">Message sent successfully!</p>
//         )}
//         {submitStatus === "error" && (
//           <p className="submit-error">Failed to send message. Please try again.</p>
//         )}
//       </form>
//     </motion.div>
//   );
// };

// export default Contact;

// // import React, { useRef, useState } from "react";
// // import { motion } from "framer-motion";


// // const Contact = () => {
   
// //   // const [formData, setFormData] = useState({
// //   //   name: "",
// //   //   email: "",
// //   //   message: "",
// //   // });
// //   // const [isSubmitting, setIsSubmitting] = useState(false);
// //   // const [submitStatus, setSubmitStatus] = useState("");

// //   // // Handle form input changes
// //   // const handleChange = (e) => {
// //   //   const { name, value } = e.target;
// //   //   setFormData({ ...formData, [name]: value });
// //   // };

// //   // // Handle form submission
// //   // const handleSubmit = (e) => {
// //   //   e.preventDefault();
// //   //   setIsSubmitting(true);

// //   //   // Replace with your EmailJS credentials
// //   //   const serviceID = process.env.SERVICE_ID;
// //   //   const templateID = process.env.TEMPLATE_ID;
// //   //   const userID = process.env.USER_ID;

// //   //   emailjs
// //   //     .send(serviceID, templateID, formData, userID)
// //   //     .then(
// //   //       (response) => {
// //   //         console.log("Email sent successfully!", response);
// //   //         setSubmitStatus("success");
// //   //         setFormData({ name: "", email: "", message: "" });
// //   //       },
// //   //       (error) => {
// //   //         console.error("Failed to send email:", error);
// //   //         setSubmitStatus("error");
// //   //       }
// //   //     )
// //   //     .finally(() => {
// //   //       setIsSubmitting(false);
// //   //     });
// //   // };

// //   return (
// //     <motion.div
// //       className="contact-us-container"
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.8 }}
// //     >
// //       <h1 className="contact-us-title">Contact Us</h1>
// //       <p className="contact-us-subtitle">
// //         We'd love to hear from you! Please fill out the form below.
// //       </p>

// //       {/* <form onSubmit={subm} className="contact-form">
// //         <motion.div
// //           className="form-group"
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           <label htmlFor="name">Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             required
// //           />
// //         </motion.div>

// //         <motion.div
// //           className="form-group"
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             required
// //           />
// //         </motion.div>

// //         <motion.div
// //           className="form-group"
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           <label htmlFor="message">Message</label>
// //           <textarea
// //             id="message"
// //             name="message"
// //             required
// //           />
// //         </motion.div>

// //         <motion.button
// //           type="submit"
// //           className="submit-button"
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //           // disabled={isSubmitting}
// //         >
// //           {/* {isSubmitting ? "Sending..." : "Submit"} */}
// //           {/* Submit
// //         </motion.button>
 
// //         {submitStatus === "success" && (
// //           <p className="submit-success">Message sent successfully!</p>
// //         )}
// //         {submitStatus === "error" && (
// //           <p className="submit-error">Failed to send message. Please try again.</p>
// //         )} 
// //       </form> */}
// //     </motion.div>
// //   );
// // };

// // export default Contact;