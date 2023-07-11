import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  passowrd: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [currentUser, setCurrentUser] = useState("");

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Email not found");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-page">
      {currentUser ? (
        <h1>Logged in as {currentUser.email}</h1>
      ) : (
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="form-fields">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                onChange={handleChange}
                value={password}
              />
            </div>
            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
