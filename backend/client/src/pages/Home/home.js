
/*
  Different ways will be provided to the users for saving the environment at home along with saving money.
  This page contains several cards(sub categories of home category). 
  On clicking on any of the sub-category user will redirected to that particular sub-category page.
*/

import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./home.css";
import HomeCard from "./HomeCard";
import axios from "axios";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function Home() {

  const [cards, setcards] = useState([]);

  useEffect(() => {
    const fetchCards = () => {
      axios
        .get(`${url}/homeCategories`)
        .then((res) => {
          setcards(res.data);
          console.log(cards);
        })
        .catch((err) => console.log(err));
    };
    fetchCards(); // fetch the cards from the database
  },[]);

  return (

    <div>
      {cards.map((card) => {
        return (
            <div>
              <nav className="navbar navbar-light homeCategoryNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Home</h4>
                </div>
              </nav>
              <Link
                className="homeCardLink"
                to={`/singleHome/${card._id}`}
              >
                <HomeCard card={card}/>
              </Link>
            </div>
        );
      })}
    </div>
  );
}

export default Home;
