import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./home.css";
import "./addProduct.css";
import logo from "../img/Group 6607.svg";
import plus from "../img/Group 6861.svg";
import admin from "../img/Group 3045.svg";
function AddProduct() {
  const [allCategory, setallCategory] = useState([]);
  const [allBrand, setallBrand] = useState([]);
  const [allColor, setallColor] = useState([]);
  const [allStatus, setallStatus] = useState([]);

  useEffect(() => {
    fetch("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.json())
      .then((response) => setallCategory(response));
  }, []);

  useEffect(() => {
    fetch("https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
      .then((response) => response.json())
      .then((response) => setallBrand(response));
  }, []);

  useEffect(() => {
    fetch("https://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
      .then((response) => response.json())
      .then((response) => setallColor(response));
  }, []);

  useEffect(() => {
    fetch("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
      .then((response) => response.json())
      .then((response) => setallStatus(response));
  }, []);

  return (
    <div className="body">
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
            <img src={admin}></img>Hesabım
          </Link>
        </button>
      </div>
      <div className="addInfo">
        <div className="formSide">
          <form>
            <h2 className="topp">Ürün Detayları</h2>

            <p className="p-name">Ürün Adı</p>
            <input
              type="text"
              placeholder="Örnek: Iphone 12 Pro Max"
              className="input1"
            />

            <label>
              <p className="exp">Açıklama</p>
              <input
                type="text"
                placeholder="Ürün açıklaması girin"
                className="input2"
              />
            </label>

            <p className="category">Kategori</p>
            <select className="select-cate" name="category">
              <option disabled selected>
                Kategori Seç
              </option>
              {allCategory.map((category) => {
                return <option key={category.id}>{category.title}</option>;
              })}
              ;
            </select>

            <p className="brand">Marka</p>
            <select className="select-brand" name="brand">
              <option disabled selected>
                Marka Seç
              </option>
              {allBrand.map((brand) => {
                return <option key={brand.id}>{brand.title}</option>;
              })}
              ;
            </select>

            <p className="color">Renk</p>
            <select className="select-color" name="color">
              <option disabled selected>
                Renk Seç
              </option>
              {allColor.map((color) => {
                return <option key={color.id}>{color.title}</option>;
              })}
              ;
            </select>

            <p className="statu">Kullanım Durumu</p>
            <select className="select-status" name="statu">
              <option disabled selected>
                Kullanım Durumu Seç
              </option>
              {allStatus.map((status) => {
                return <option key={status.id}>{status.title}</option>;
              })}
              ;
            </select>

            <label>
              <p className="price">Fiyat</p>
              <input
                type="text"
                placeholder="Bir fiyat girin    TL"
                className="enter-price"
              />
            </label>
          </form>
        </div>
        <div className="imgSide">
          <h2 className="product-img">Ürün Görseli</h2>
          <p className="imge">Bir resim ekleyin!</p>
          <input type="file" className="add-img"></input>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
