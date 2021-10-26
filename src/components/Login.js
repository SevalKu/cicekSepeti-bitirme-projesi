import "./login.css";
// import resim1 from "../img/Group 52.png";
import logo from "../img/Group 6607.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="All">
      <div className="left-side"></div>

      <img src={logo} className="logo"></img>
      <div className="login">
        <h2>Giriş Yap</h2>
        <p className="first-p">Fırsatlardan yararlanmak için giriş yap!</p>
        <p className="second-p">Email</p>
        <input
          className="input-first"
          type="email"
          placeholder="Email@example.com"
        ></input>
        <p className="third-p">Şifre</p>
        <input className="input-second" type="password"></input>
        <p className="forget">Şifremi Unuttum</p>

        <button className="button">Giriş</button>

        <span className="signIn">
          Hesabın yok mu?
          <Link to="/signIn" className="uyeOl">
            Üye ol
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
