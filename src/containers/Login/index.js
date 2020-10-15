import React from "react";
import SocialButton from "components/SocialButton";
import Button from "components/Button";
import FormInput from "components/Form/FormInput";
import FormButton from "components/Form/FormButton";
export default function LoginContainer(props) {
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
      <section className="login spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form action="#">
                  <FormInput
                    placeholder="Email address"
                    type="text"
                    icon="icon_mail"
                  />
                  <FormInput
                    placeholder="Password"
                    type="password"
                    icon="icon_lock"
                  />
                  <FormButton className="site-btn">Login Now</FormButton>
                </form>
                <Button to="/" className="forget_pass">
                  Forgot Your Password?
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Dont’t Have An Account?</h3>
                <Button to="/register" className="primary-btn">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
          <div className="login__social">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="login__social__links">
                  <span>or</span>
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
        </div>
      </section>
    </>
  );
}
