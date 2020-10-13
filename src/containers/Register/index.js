import React from "react";
import { Link } from "react-router-dom";
import SocialButton from "components/SocialButton";
import Button from "components/Button";
import FormInput from "components/Form/FormInput";
import FormButton from "components/Form/FormButton";

export default function Register(props) {
  const socialButtons = [
    {
      to: "/",
      className: "facebook",
      label: "Sign in With Facebook",
      icon: "fa fa-facebook",
    },
    {
      to: "/",
      className: "google",
      label: "Sign in With Google",
      icon: "fa fa-google",
    },
    {
      to: "/",
      className: "twitter",
      label: "Sign in With Twitter",
      icon: "fa fa-twitter",
    },
  ];
  return (
    <>
      <section class="signup spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="login__form">
                <h3>Sign Up</h3>
                <form action="#">
                  <FormInput
                    type="text"
                    placeholder="Email address"
                    icon="icon_mail"
                  ></FormInput>
                  <FormInput
                    type="text"
                    placeholder="Your Name"
                    icon="icon_profile"
                  ></FormInput>
                  <FormInput
                    type="type"
                    placeholder="Password"
                    icon="icon_lock"
                  ></FormInput>
                  <FormButton className="site-btn">Register Now</FormButton>
                </form>
                <h5>
                  Already have an account? <Link to="/login">Log In!</Link>
                </h5>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="login__social__links">
                <h3>Login With:</h3>
                <ul>
                  {socialButtons.map((item) => {
                    return (
                      <li>
                        <SocialButton
                          to={item.to}
                          className={item.className}
                          icon={item.icon}
                        >
                          {item.label}
                        </SocialButton>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
