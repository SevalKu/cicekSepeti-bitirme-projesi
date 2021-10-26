import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./home.css";
import logo from "../img/Group 6607.svg";
import plus from "../img/Group 6861.svg";
import admin from "../img/Group 3045.svg";

function Home() {
  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    fetch("https://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.json())
      .then((response) => setalldata(response.slice(0, 30)));
  }, []);

  return (
    <div className="Home">
      <div className="Header">
        <div>
          <img src={logo} className="logoo"></img>
        </div>

        <button className="addprodct">
          <Link to="/addProduct" className="addp1">
            <img src={plus}></img>Ürün Ekle
          </Link>
        </button>
        <button className="logIn">
          <Link to="/login" className="log">
            <img src={admin}></img>Giriş yap
          </Link>
        </button>
      </div>
      <div className="information">
        <div className="bigImg"></div>

        <ul className="categories">
          <li>Hepsi</li>
          <li>Pantolon</li>
          <li>Gömlek</li>
          <li>Tişört</li>
          <li>Şort</li>
          <li>Sweatshirt</li>
          <li>Kazak</li>
          <li>Polar</li>
          <li>Mont</li>
          <li>Abiye</li>
          <li>Ayakkabı</li>
          <li>Aksesuar</li>
          <li>Çanta</li>
          <li>Triko</li>
          <li>Diğer</li>
        </ul>

        <div className="productList">
          {alldata.map((alldata) => {
            return (
              <div key={alldata.id} className="card">
                <div>
                  <img src={alldata.imageUrl} className="productImg"></img>
                </div>
                <div>
                  <span className="brand">{alldata.brand.title}</span>
                  <span className="colors">Renk: {alldata.color.title}</span>
                </div>
                <div className="price">{alldata.price} TL</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
