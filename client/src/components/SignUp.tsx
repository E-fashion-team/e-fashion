import React,{ FunctionComponent, useCallback,useState, ChangeEvent, FormEvent  } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../SignUp.css";


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
  role: UserRole.Follower,
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
      day: '',
      month: '',
      year: '',
    },
    role: UserRole.Follower,
  });
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const startYear = 1940;
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);


  const [error, setError] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dateOfBirth: {
        ...formData.dateOfBirth,
        [name]: value,
      },
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.password || !formData.role) {
        setError('Please fill in all fields.');
        return;
      }
      const { day, month, year } = formData.dateOfBirth;
      const formattedDateOfBirth = `${year}-${month}-${day}`;

      console.log(formattedDateOfBirth);

       const response = await axios.post('http://localhost:5000/api/user/singup', {
        ...formData,
        dateOfBirth: formattedDateOfBirth,
      });

      if (response.status === 200) {
        // Handle success
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderOptions = (options: string[]) => {
    return options.map((option, index) => (
      <option key={index} value={String(index + 1)}>{option}</option>
    ));
  };

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
<input className="emailAddress" type="text"/>Email Address
<div className="groupItem" />
</div>
<div className="vectorParent">
<img className="vectorIcon2" alt="" src="Vector.svg" />
<input className="emailAddress" type="password"/>Password
<div className="groupItem" />
</div>
<div className="groupParent">
<div className="fullNameParent">
<input className="emailAddress" type="text"/>Full Name
<div className="lineDiv" />
</div>
<div className="lastNameParent">
<input className="emailAddress"type="text"/>Last Name
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
<div className="createAccount">Create Account</div>
</div>
</div>
<img className="image8Icon" alt="" src="image 8.png" />
<div className="signUp1">Sign Up</div>
</div>
  );

};

export default SignUp;
