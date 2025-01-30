import React, { useState } from "react";
import Button from "@mui/material/Button";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";

const ContactEmail = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userSubject: "",
    userPhone: "",
    userMessage: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!user.userName || !user.userEmail || !user.userMessage) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.userEmail)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (user.userPhone && !phoneRegex.test(user.userPhone)) {
      setError("Please enter a valid phone number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: user.userName,
        email: user.userEmail,
        subject: user.userSubject,
        phone: user.userPhone,
        message: user.userMessage,
      });
      console.log("Message sent successfully:", response.data);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        handleReset();
      }, 2000);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again.");
    }
  };

  const handleReset = () => {
    setUser({
      userName: "",
      userEmail: "",
      userSubject: "",
      userPhone: "",
      userMessage: "",
    });
    setError("");
    setIsSent(false);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-evenly w-full px-4 sm:px-6 md:px-10 py-24 mt-[75px] bg-gray-300 rounded-lg shadow-md bg-fixed">
      {/* Form Section */}
      <div className="mt-5 sm:w-1/2">
        <h1 className="text-red-800 font-semibold">Send Us Email</h1>
        <h2 className="text-3xl font-bold mt-2">Feel Free to Write</h2>

        <form id="contactForm" onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleInput}
              placeholder="Enter Name"
              className="p-4 w-full"
              required
            />
            <input
              type="email"
              name="userEmail"
              value={user.userEmail}
              onChange={handleInput}
              placeholder="Enter Email"
              className="p-4 w-full"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-5 gap-4">
            <input
              type="text"
              name="userSubject"
              value={user.userSubject}
              onChange={handleInput}
              placeholder="Enter Subject"
              className="p-4 w-full"
            />
            <input
              type="tel"
              name="userPhone"
              value={user.userPhone}
              onChange={handleInput}
              placeholder="Enter Phone"
              className="p-4 w-full"
            />
          </div>
          <textarea
            name="userMessage"
            placeholder="Enter Message"
            className="p-4 mt-5 w-full"
            value={user.userMessage}
            onChange={handleInput}
            required
          ></textarea>
          {error && <p className="text-red-500 mt-3">{error}</p>}
          {isSent && (
            <p className="text-green-600 font-semibold mt-3">
              Message Sent Successfully!
            </p>
          )}
          <div className="flex gap-4 mt-5">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#261A33",
                color: "#fff",
                "&:hover": { backgroundColor: "#201031" },
              }}
            >
              Send Message
            </Button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-gray-400 text-white rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="mt-5 sm:mt-0 sm:w-1/2 sm:px-14">
        <h1 className="text-red-800 font-semibold">Contact Information</h1>
        <h2 className="text-3xl font-bold mt-2">We're Always Here to Help</h2>
        <p className="mt-2">
          If you have any questions or need assistance, feel free to reach out
          to us anytime!
        </p>
        <div className="flex items-center gap-2 mt-5">
          <PhoneForwardedIcon />
          <div>
            <h1 className="font-semibold">Have Any Questions?</h1>
            <h2>+923124527067</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <EmailIcon />
          <div>
            <h1 className="font-semibold">Write Email</h1>
            <h2>1103butt@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEmail;
