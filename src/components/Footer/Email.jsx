import React, { useState } from "react";
import axios from "axios";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Improved regex
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear errors and set loading state
    setError("");
    setLoading(true);

    try {
      // Send email to backend
      const response = await axios.post(
        `http://localhost:3000/user`, // Use environment variable
        { email }
      );
      console.log("Email saved successfully:", response.data);

      // Show success message
      setIsSent(true);

      // Reset email and success state after 2 seconds
      setTimeout(() => {
        setEmail("");
        setIsSent(false);
      }, 2000);
    } catch (err) {
      console.error("Error saving email:", err);
      setError("Failed to save email. Please try again.");
    } finally {
      // Clear loading state
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      {/* Email Input */}
      <input
        type="text"
        className="bg-gray-300 border border-gray-400 rounded-3xl px-4 py-2 text-gray-700 text-xl w-full"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Success Message */}
      {isSent && (
        <p className="text-green-500 text-sm mt-2">
          Email submitted successfully!
        </p>
      )}
      {/* Submit Button */}
      <button
        className={`rounded-3xl px-6 py-3 mt-5 w-full ${
          loading
            ? "bg-gray-400 text-gray-500 cursor-not-allowed"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }`}
        type="submit"
        disabled={loading} // Disable button while loading
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default EmailInput;
