import React, { useState } from 'react';
import '../css/profile.css';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../Contexts/loginContext';
import MainContent from './mainContent';

const Profile = () => {
  const { data } = useLoginContext();
  const [products, setProducts] = useState(true);
  const [category, setCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [settings, setSettings] = useState(false);
  const [about, setAbout] = useState(false);

  const handleProducts = () => {
    setProducts(true);
    setCategory(false);
    setSubCategory(false);
    setSettings(false);
    setAbout(false);
  };

  const handleCategory = () => {
    setProducts(false);
    setCategory(true);
    setSubCategory(false);
    setSettings(false);
    setAbout(false);
  };

  const handleSubCategory = () => {
    setProducts(false);
    setCategory(false);
    setSubCategory(true);
    setSettings(false);
    setAbout(false);
  };

  const handleSettings = () => {
    setProducts(false);
    setCategory(false);
    setSubCategory(false);
    setSettings(true);
    setAbout(false);
  };

  const handleAbout = () => {
    setProducts(false);
    setCategory(false);
    setSubCategory(false);
    setSettings(false);
    setAbout(true);
  };

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <header className="header-profile">
        <h2 className="u-name">
          Profile <b>Details</b>
          <label for="checkbox">
            <i id="navbtn" className="fa fa-bars" aria-hidden="true"></i>
          </label>
        </h2>
        <i className="fa fa-user" aria-hidden="true"></i>
      </header>
      <div className="profile-body">
        <nav className="side-bar">
          <div className="user-p">
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: '50px' }}
            ></i>
            <h4>Elias</h4>
          </div>
          <ul>
            <li
              className={`profile-list ${
                products && 'profile-active-background'
              } `}
              onClick={handleProducts}
            >
              <i className="fa fa-desktop" aria-hidden="true"></i>
              <span>Products</span>
            </li>
            <li
              className={`profile-list ${
                category && 'profile-active-background'
              } `}
              onClick={handleCategory}
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>Categories</span>
            </li>
            <li
              className={`profile-list ${
                subCategory && 'profile-active-background'
              } `}
              onClick={handleSubCategory}
            >
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span>Sub Category</span>
            </li>
            <li
              className={`profile-list ${
                about && 'profile-active-background'
              } `}
              onClick={handleAbout}
            >
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
            </li>
            <li
              className={`profile-list ${
                settings && 'profile-active-background'
              } `}
              onClick={handleSettings}
            >
              <i className="fa fa-cog" aria-hidden="true"></i>
              <span>Setting</span>
            </li>
            <li className="profile-list">
              <i className="fa fa-power-off" aria-hidden="true"></i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
        <section className="section-1">
          {products && <MainContent showCart={false} />}
          {category && <p>Category</p>}
          {settings && <p>Settings</p>}
          {about && <p>About</p>}
          {subCategory && <p>Sub Category</p>}
        </section>
      </div>
    </>
  );
};

export default Profile;
