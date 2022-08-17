import { useState, useContext } from "react";
import { ProductContext } from "../components/ProductContext";
function Login() {
  const { loggedIn, setLoggedIn } = useContext(ProductContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  function tryLogin(e: any) {
    e.preventDefault();
    if (username === "user" && password === "user") {
      localStorage.setItem("loggedIn", JSON.stringify(true));
      setLoggedIn(true);
      setLoginError('')
    }else{
      setLoginError("Invalid username or password");
    }
  }
  return (
    <div>
      {!loggedIn && (
        <form>
          <input
            className="border-b-2 m-2"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border-b-2 m-2"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-4 border-2 border-indigo-400 hover:bg-zinc-200"
            onClick={(e) => tryLogin(e)}
          >
            Login
          </button>
          <h4 className="text-center text-red-600 font-bold">{loginError}</h4>
        </form>
      )}
    </div>
  );
}

export default Login;
