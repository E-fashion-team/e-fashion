import React,{ FunctionComponent, useCallback,useState, ChangeEvent, FormEvent  } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../store/auth";
import { RootState, AppDispatch } from '../store/index'
import img from "../images/image boy.png"
import icon from "../images/Vector.png"


enum UserRole {
  Brand = 'brand',
  Follower = 'follower',
  Fashionista  = 'fashionista',
}

interface FormData {
  name: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  role: UserRole
}


const SignUp: FunctionComponent = () => {
  const onAlreadyAMemberClick = useCallback(() => {
    // Please sync "Sign In" to the project
  }, []);

  const [brandRole, setBrandRole] = useState(false);
  const [followerRole, setFollowerRole] = useState(false);
  const [fashionistaRole, setFashionistaRole] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    dateOfBirth: {
      day: '1', 
      month: '1', 
      year: '2000',
    },
    role: UserRole.Follower,
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
  
  const renderOptions = (options: string[]): JSX.Element[] => {
    return options.map((option, index) => (
      <option key={index} value={option.toLowerCase()}>{option}</option>
    ));
  };
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
    } else if (name === "role") {
      // Ensure value is of type UserRole
      const selectedRole: UserRole = value as UserRole;
      setBrandRole(selectedRole === UserRole.Brand);
      setFollowerRole(selectedRole === UserRole.Follower);
      setFashionistaRole(selectedRole === UserRole.Fashionista);
      setFormData((prevData) => ({
        ...prevData,
        role: selectedRole,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  
  
  return (
    <div className="sign--Up"> 
<div className="sign--Up--Child" />
<div className="rectangle--Parent">
<div className="group--Child" />
<b className="begin--Your--Meta1">Begin your meta fashion journey here</b>
<div className="already--AMember--Container" onClick={onAlreadyAMemberClick}>
<span>
<span>Already a Member?</span>
<span className="--span">{` `}</span>
</span>
<span className="--span">
<span className="sign--In1">Sign In</span>
</span>
</div>
<div className="email--Address--Parent">
<input className="email--Address" type="text" name="email" placeholder="Email Address" onChange={handleChange}/>
<div className="group--Item" />
</div>
<div className="vector--Parent">
<img className="vector--Icon2" alt="" src={icon} />
<input className="email--Address" type="password" name="password" placeholder="Password" onChange={handleChange}/>
<div className="group--Item" />
</div>
<div className="group--Parent">
<div className="full--Name--Parent">
<input className="email--Address" type="text" name="name" placeholder="Full Name" onChange={handleChange}/>
<div className="line--Div" />
</div>
<div className="last--Name--Parent">
<input className="email--Address"type="text" placeholder="Last Name" />
<div className="group--Child1" />
</div>
</div>
<div className="date--OfBirth--Parent">
<div className="dateOf--Birth1">Date Of Birth</div>
<div className="group--Child2" />
<div className="group--Child3" />
<div className="group--Child4" />
<div className="group--Child5" />
<div className="date--Inputs">
        <select className="--month" name="month" value={formData.dateOfBirth.month} onChange={handleChange}>
          <option value="">Month</option>
          {renderOptions(months)}
        </select>
        <select className="--day" name="day" value={formData.dateOfBirth.day} onChange={handleChange}>
          <option value="">Day</option>
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <option key={day} value={String(day)}>{day}</option>
          ))}
        </select>
        <select className="--year" name="year" value={formData.dateOfBirth.year} onChange={handleChange}>
          <option value="">Year</option>
          {renderOptions(years.map(String))}
        </select>
        <select className="--role" name="role" value={formData.role} onChange={handleChange}>
          <option value="">Role</option>
            {renderOptions(Object.values(UserRole))}
        </select>
      </div>

</div>
<div className="create--Account--Wrapper">
<div className="create--Account" onClick={handleSubmit}>Create Account</div>
</div>
</div>
<img className="image--8Icon" alt="" src={img} />
<div className="sign--Up1">Sign Up</div>
</div>
  );

};

export default SignUp;
