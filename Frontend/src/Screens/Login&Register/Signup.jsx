import React, { useState } from "react";
import "./signup.css";
import Validation from "../../components/Validation";
import axios from "axios";

function SignupPage() {



  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("test");
    const newUser = { fname,lname,name, email, password };

    console.log(newUser);
    
      try {
        await axios.post("http://localhost:5001/api/users", newUser);
        alert("user added") ;// Fetch users after adding a new user
        window.location.href = '/login';;
      } catch (error) {
        console.error("Error adding user:", error);
      }
    
  };


  return (
    <div id="body">
      <div class="background">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />

        <div className="wrapper-outside">
          <div class="wrapper">
            <h1 className="font-bold">Sign Up</h1>
            <form >
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="text"
                name="firstName"
                placeholder="First Name..."
                required
                onChange={(e)=>{setfname(e.target.value)}}
              />
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="text"
                name="LastName"
                placeholder="Last Name..."
                onChange={(e)=>{setlname(e.target.value)}}
                required
              />
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="text"
                name="username"
                placeholder="Username..."
                onChange={(e)=>{setname(e.target.value)}}
                required
              />
              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="email"
                name="email"
                placeholder="Email..."
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />

              <input
                className="text-[#000] bg-[#7f7f7f] hover:border-[#000]"
                type="password"
                name="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Password"
              />

              <div>
                <div class="content">
                  <p>Password must contains</p>
                  <ul class="requirement-list">
                    <li>
                      <i class="fa-solid fa-circle"></i>
                      <span>At least 8 characters length</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-circle"></i>
                      <span>At least 1 number (0...9)</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-circle"></i>
                      <span>At least 1 lowercase letter (a...z)</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-circle"></i>
                      <span>At least 1 special symbol (!...$)</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-circle"></i>
                      <span>At least 1 uppercase letter (A...Z)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="terms">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">
                  I agree to these
                  <a href="../images/t&c.pdf" target="_blank">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button className="bg-[#d73d25cf]" onClick={handleSubmit}>
                Sign Up
              </button>
            </form>
            <div class="member">
              <center>
                Not a member? <a href="#">Register Now</a>
              </center>
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
      <script></script>
    </div>
  );
}
export default SignupPage;
