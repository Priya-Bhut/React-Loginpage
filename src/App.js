import logo from "./logo.svg";
import "./App.css";

function myfunction() {
  alert("Login Successfully");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form id="main">
          <h2>Login to your account</h2>
          <div className="input-parent">
            <label htmlFor="username">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-parent">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="button" onClick={myfunction}>
            Login
          </button>
        </form>
      </header>
    </div>
  );
}
export default App;
