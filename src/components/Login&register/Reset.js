import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Reset.css"

const Reset = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = form.current.email.value;
    try {
      const response = await fetch(`http://localhost:3000/users?email=${email}`);
      if (!response.ok) throw new Error("Failed to fetch user data");
      const users = await response.json();

      if (users.length === 0) {
        alert("No account found with this email!");
        setLoading(false);
        return;
      }
      
      const user = users[0];
      const password = user.password;

      const templateParams = {
        name: user.user_name,
        email: email,
        password: password,
      };


      emailjs.send(
        "service_1no4qpi",
        "template_vo3kk0d",
        templateParams,
        {
        publicKey: "lOjokhuzil0qZUyCu"
        }
      );


      alert("Password has been sent to your email!");
      form.current.reset();
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to send password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="reset-form" ref={form} onSubmit={sendEmail}>
    <h3>Enter your email</h3>
    <div className="mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email Address"
        name="email"
        required
      />
    </div>
    <button
      type="submit"
      className="btn btn-primary w-100"
      disabled={loading}
    >
      {loading ? "Sending..." : "Send Password"}
    </button>
  </form>
  );
};

export default Reset;