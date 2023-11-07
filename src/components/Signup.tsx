import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { app } from "../../public/firebase.tsx";
import { getDatabase, ref, set } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

const registerWithEmailAndPassword = async (info: {
  email: string;
  passw: string;
  firstname: string;
  lastname: string;
  confirmpassw: string;
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      info.email,
      info.passw,
    );
    const user = res.user;
    const userId = user.uid;

    await set(ref(database, "users/" + userId), {
      email: info.email,
      firstname: info.firstname,
      lastname: info.lastname,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmpassw, setConfirmpassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const submitThis = (e) => {
    e.preventDefault();
    const info = {
      email: email,
      passw: passw,
      firstname: firstname,
      lastname: lastname,
      confirmpassw: confirmpassw,
    };
    if (email === "" || passw === "") {
      console.log("empty");
    } else {
      setDataInput([info]);
      registerWithEmailAndPassword(info);
      console.log(email);
    }

    //register new user
  };
  return (
    <>
      <div className="container">
        <h2>Signup</h2>
        <hr />
        <form action="" onSubmit={(e) => submitThis(e)}>
          <div className="col align-self-center ">
            <label htmlFor="email" className="form-label">
              Email
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
              <div className="invalid-feedback">Please fill email</div>
            </div>
          </div>
          <div className="col align-self-center ">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please fill firstname</div>
            </div>
          </div>
          <div className="col align-self-center">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please fill last name.</div>
            </div>
          </div>
          <div className="col align-self-center">
            <label htmlFor="passw" className="form-label">
              Password
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
              <div className="invalid-feedback">Please fill password</div>
            </div>
          </div>
          <div className="col align-self-center ">
            <label htmlFor="confirmpassw" className="form-label">
              Confirm password
            </label>
            <div className="input-group has-validation">
              <input
                className="form-control"
                type="password"
                name="confirmpassw"
                id="confirmpassw"
                value={confirmpassw}
                onChange={(e) => setConfirmpassw(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">
                Please fill confirm password.
              </div>
            </div>
          </div>
          <div className="col mt-3">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
