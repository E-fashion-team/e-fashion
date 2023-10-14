import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/clientDard.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  role: string;
  image: string;
  followers: number;
}

const ClientCard = ({ users }: { users: User[] }) => {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(false);

  const handleFollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers + 1,
      })
      .then((response) => {
        setFollowers((prevFollowers) => prevFollowers + 1);
        setFollowing(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnfollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers - 1
      })
      .then((response) => {
        setFollowers((prevFollowers) => prevFollowers - 1)
        setFollowing(false);
      })
      .catch((error) => {
        console.error(error)
      });
  };

  const brandUsers = users.filter((user) => user.role === "brand");

  return (
    <div className="clientCard-container">
      {brandUsers.map((user) => (
        <div key={user.id} className="clientCard ">
          <div className="clientCardSha shadow">
            <img className="immgg" src={user.image} alt="" />
            <div className="images flex flex-c justify-center alg-center">
              <div className="text-log">{user.name}</div>
            </div>
            <div className="parag">
              <p className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {following ? (
              <button className="butt" onClick={() => handleUnfollow(user)}>
                <div className="butt-wrapper">Unfollow</div>
              </button>
            ) : (
              <button className="butt" onClick={() => handleFollow(user)}>
                <div className="butt-wrapper">+ Follow </div>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const BrandCard = () => {
  const [brands, setBrands] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/user/getUserByRole/brand").then((response) => {
      setBrands(response.data);
    });
  }, []);

  return (
    <div>
      <ClientCard users={brands} />
    </div>
  );
};

export default BrandCard;