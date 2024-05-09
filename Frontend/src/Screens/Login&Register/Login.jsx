import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";


function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlelogsubmit = async () => {
    console.log("test");
    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        {
          name: name,
          password: password,
        }
      );

      if (response.status === 200) {
        console.log(response.data.message); // Password is correct

        window.location.href = '/Home';
      } else {
        console.log(response.data.message); // Handle other status codes
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  // Usage

  return (
    <div>

      
      <div id="body">
        <div className="bg">
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </div>
          <div class="wrapper">
            <h1>Login</h1>
            <form>
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="text"
                name="uid"
                placeholder="Username"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="password"
                name="pwd"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div class="recover"></div>
              <button
                className="bg-[#dc3b22cf]"
                onClick={handlelogsubmit}
                
              >
                Sign in
              </button>
            </form>

            <div class="member">
              <center>Not a member?</center>
              <Link to="/signup">Register Now</Link>
            </div>
            <div>
              <center>
                <p>or continue with</p>
                <div class="icons">
                  <a href="https://www.apple.com/">
                    <i class="fa fa-brands fa-apple" id="apple"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i class="fa fa-brands fa-facebook-f" id="fb"></i>
                  </a>
                  <a href="https://www.google.com/">
                    <i class="fa fa-brands fa-google" id="google"></i>
                  </a>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
