import { FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Login({ onChange, onSubmit, loginData }) {
  const { loginEmail, loginPassword } = loginData;

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt /> Log in
        </h1>
        <p>Fill in your details</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              name="loginEmail"
              value={loginEmail}
              placeholder="enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              name="loginPassword"
              value={loginPassword}
              placeholder="enter your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" className="btn btn-block">
              Log in
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;