import React,{ FunctionComponent, useCallback,useState, ChangeEvent, FormEvent  } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../store/auth";
import { RootState, AppDispatch } from '../store/index'
import { log } from "console";


// enum UserRole {
//   Brand = 'brand',
//   Follower = 'follower',
//   Fashionista  = 'fashionista',
// }

interface FormData {
  name: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  // role: UserRole.Follower,
}


const SignUp: FunctionComponent = () => {
  const onAlreadyAMemberClick = useCallback(() => {
    // Please sync "Sign In" to the project
  }, []);

 
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    dateOfBirth: {
      day: '1', // Set default day value here (1 for example)
      month: '1', // Set default month value here (1 for January)
      year: '2000', // Set default year value here (2000 for example)
    },
  });

  const user = useSelector((state: RootState) => state)
  console.log(user)
  const dispatch = useDispatch<AppDispatch>()
  

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const startYear = 1940;
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);


  const [error, setError] = useState<string>('');
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const { day, month, year } = formData.dateOfBirth;
    if (!day || !month || !year) {
      setError('Invalid date of birth.');
      return;
    }

    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');
    const paddedYear = year.padStart(4, '0');
    const formattedDateOfBirth = `${paddedYear}-${paddedMonth}-${paddedDay}`;

    // Dispatch signupUser action with the updated formData
    dispatch(signupUser({ ...formData, dateOfBirth: formattedDateOfBirth }));
  };
  
    const renderOptions = (options: string[]) => {
      return options.map((option, index) => (
        <option key={index} value={String(index + 1)}>{option}</option>
      ));
    };

    // console.log(formattedDateOfBirth);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      if (name === "day" || name === "month" || name === "year") {
        setFormData((prevData) => ({
          ...prevData,
          dateOfBirth: {
            ...prevData.dateOfBirth,
            [name]: value,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }    
  return (
    <div className="signUp"> 
<div className="signUpChild" />
<div className="rectangleParent">
<div className="groupChild" />
<b className="beginYourMeta1">Begin your meta fashion journey here</b>
<div className="alreadyAMemberContainer" onClick={onAlreadyAMemberClick}>
<span>
<span>Already a Member?</span>
<span className="span">{` `}</span>
</span>
<span className="span">
<span className="signIn1">Sign In</span>
</span>
</div>
<div className="emailAddressParent">
<input className="emailAddress" type="text" name="email" onChange={handleChange}/>Email Address
<div className="groupItem" />
</div>
<div className="vectorParent">
<img className="vectorIcon2" alt="" src="Vector.svg" />
<input className="emailAddress" type="password" name="password" onChange={handleChange}/>Password
<div className="groupItem" />
</div>
<div className="groupParent">
<div className="fullNameParent">
<input className="emailAddress" type="text" name="name" onChange={handleChange}/>Full Name
<div className="lineDiv" />
</div>
<div className="lastNameParent">
<input className="emailAddress"type="text" />Last Name
<div className="groupChild1" />
</div>
</div>
<div className="dateOfBirthParent">
<div className="dateOfBirth1">Date Of Birth</div>
<div className="groupChild2" />
<div className="groupChild3" />
<div className="groupChild4" />
<div className="dateInputs">
        <select className="month" name="month" value={formData.dateOfBirth.month} onChange={handleChange}>
          <option value="">Month</option>
          {renderOptions(months)}
        </select>
        <select className="day" name="day" value={formData.dateOfBirth.day} onChange={handleChange}>
          <option value="">Day</option>
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <option key={day} value={String(day)}>{day}</option>
          ))}
        </select>
        <select className="year" name="year" value={formData.dateOfBirth.year} onChange={handleChange}>
          <option value="">Year</option>
          {renderOptions(years.map(String))}
        </select>
      </div>
<img className="vectorIcon3" alt="" src="Vector.svg" />
</div>
<div className="createAccountWrapper">
<div className="createAccount" onClick={handleSubmit}>Create Account</div>
</div>
</div>
<img className="image8Icon" alt="" src="image 8.png" />
<div className="signUp1">Sign Up</div>
</div>
  );

};

export default SignUp;
