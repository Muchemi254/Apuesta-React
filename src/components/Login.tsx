import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info = { email: email, passw: passw };
    if (email === "" || passw === "") {
    } else {
      setDataInput([info]);
      console.log(info);
    }
  };
  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <hr />
        <form action="" onSubmit={(e) => submitThis(e)}>
          <div className="col align-self-center ">
            <label htmlFor="email" className="form-label">
              <h6>Email</h6>
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="error"></div>
            </div>
          </div>
          <div className="col align-self-center">
            <label htmlFor="passw" className="form-label">
              <h6>Password</h6>
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                type="password"
                name="passw"
                id="passw"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="error"></div>
            </div>
          </div>
          <div className="col mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
