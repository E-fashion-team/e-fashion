import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/clientDard.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

interface User {
  id: number;
  name: string;
  role: string;
  image: string;
  followers: number;
  following: boolean;
}

const UpcomingCreators = ({ users }: { users: User[] }) => {
  const [fashionistaUsers, setFashionistaUsers] = useState<User[]>([]);

  useEffect(() => {
    setFashionistaUsers(users.slice(0, 3));
  }, [users]);

  const handleFollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers + 1,
      })
      .then((response) => {
        const updatedUsers = fashionistaUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: true };
          }
          return u;
        });
        setFashionistaUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnfollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers - 1,
      })
      .then((response) => {
        const updatedUsers = fashionistaUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: false };
          }
          return u;
        });
        setFashionistaUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div className="clientCard-container">
    {fashionistaUsers.map((user) => (
      <div key={user.id} className="clientCard ">
        <div className="clientCardSha shadow">
          <img className="immgg" src={user.image} alt="" />
          <div className="images flex flex-c justify-center alg-center">
            <div className="text-log">{user.name}</div>
          </div>
          <div className="parag">
            <p className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {user.following ? (
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
const FashionistaCard = () => {
  const [creators, setcreators] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/user/getUserByRole/fashionista").then((response) => {
      const users = response.data.map((user) => ({
        ...user,
        following: false,
      }));
      setcreators(users);
    });
  }, []);

  return (
    <div>
      <UpcomingCreators users={creators} />
    </div>
  );
};

export default FashionistaCard;