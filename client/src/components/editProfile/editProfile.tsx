
import img1 from "../../images//Ellipse 251.png"
import img2 from "../../images/Cover Image.png"
import img3 from "../../images/Rectangle 1901 (1).png"
import asset from "../../images/edit profile/Vector (2).svg"
import asset1 from "../../images/edit profile/ph.svg"
import im1 from '../../images/edit profile/Rectangle 1906.png'
import im2 from '../../images/edit profile/Rectangle 1907.png'
import im3 from '../../images/edit profile/Rectangle 1908.png'
import im4 from '../../images/edit profile/Rectangle 1909.png'
import im5 from '../../images/edit profile/Rectangle 1910.png'
import im6 from '../../images/edit profile/Rectangle 1911.png'
import im7 from '../../images/edit profile/Rectangle 1912.png'
import im8 from '../../images/edit profile/Rectangle 1913.png'
import im9 from '../../images/edit profile/Rectangle 1901.png'
import like from '../../images/edit profile/Vector.svg'
import comm from '../../images/edit profile/rrrrr.svg'
import share from '../../images/edit profile/share.svg'
import sss from '../../images/edit profile/sssss.svg'


import axios from "axios"

import img4 from "../../images/Rectangle 1889.png"

import React,{ useState,FunctionComponent,ChangeEvent  } from "react";
import   "../../styles/editProfile1.css"
import NavBar from "../NavBar"
import Footer from "../Footer"


const EditProfile: FunctionComponent = () => {

  interface User {
  
    
  }
  
  
    const [users, setUsers] = useState<User | null>(null);
  
    const updateUser = (name: string, newUpdate: any) => {
      axios
        .put(`http://localhost:5000/api/user/${name}`, newUpdate)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };




  interface UserClient {
    email: string;
    name: string;
    password: string;
}
const [allimage, setAllImage] = useState<string[]>([])
const [image, setImage] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [userClient, setUser] = useState<UserClient>({
        email: 'email',
        name: 'name',
        password: 'password',
    });

    const updateAccount = (): void => {
        if (
            firstName === '' ||
            lastName === '' ||
            email === '' ||
            currentPassword === '' ||
            newPassword === '' ||
            confirmPassword === '' ||
            address === ''
        ) {
            alert('Please Enter your data');
            return;
        }
        if (userClient.password !== currentPassword) {
            alert('Wrong Password');
            return;
        }
        if (userClient.password === currentPassword && newPassword === confirmPassword) {

            setUser({
                ...userClient,
                password: newPassword,
                name: firstName + ' ' + lastName,
                email: email,
                
            });
            updateUser(userClient.name,userClient)
          
        }
    };
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    };
    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    };
    const handleEmailChange= (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
    const handleNewPasswordChange= (e: ChangeEvent<HTMLInputElement>) => {
      setNewPassword(e.target.value);
    };
    const handleCurrentPasswordChange= (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentPassword(e.target.value);
    };
    const handleConfirmPasswordChange= (e: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
    };
    const handleAdressPasswordChange= (e: ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    };

  const profileUpload= async (e:any)=>{
const formData=new FormData()
formData.append("file",e.target.files[0])
formData.append("upload_preset","oztadvnr")

await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
console.log(response.data["secure_url"])
setImage(response.data["secure_url"])
allimage.push(response.data["secure_url"])
setAllImage(allimage)
}).catch((error)=>{
  throw error
})

  }
// // const handleSubmit= async()=>{
// // await profileUpload(img)
// // }
  return (
  <div>
    <NavBar/>
<div className="edit-profile-page">
<div className="overlap-wrapper">
    <div className="overlap">
        
        <div className="overlap-2">
            <div className="banner">
                <div className="overlap-3">
                    <div className="overlap-4">
                        <img className="cover-image" alt="Cover image" src={img2} />
                        <img className="edit-cover-image" alt="Edit cover image" src={asset}  />
                        <div className="profile-pic">
                            <div className="overlap-group-2">
                                <img className="ellipse" alt="Ellipse" src={img1} />
                                <div className="ellipse-2" />
                                <img className="vector" alt="Vector" src={asset1} />
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <img className="vector-2" alt="Vector" src={asset} />
                        <div className="text-wrapper-14" >Edit Profile</div>
                    </div>
                </div>
                <div className="text">
                    <div className="text-wrapper-15">Farhan Khan</div>
                    <div className="text-wrapper-16">@farhan</div>
                    <p className="text-wrapper-17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, consectetur purus amet, accumsan
                        nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. Tortor, consectetur purus amet,
                        accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.
                    </p>
                </div>
            </div>
           
        </div>
        <div className="photos-sec">
            <div className="overlap-5">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="chooseFileContainer" >
                        <input  type="file" className="text-wrapper-18" onChange={(e)=>{profileUpload(e)}}/>Photos
                        </div>
                    </div>
                </div>
                {allimage.map((element)=>{return (
                <img className="rectangle" alt="Rectangle" src={element} />
                )})}
            </div>
        </div>
        <div className="feed-sec">
            <div className="comment-sec">
                <div className="overlap-group-4">
                    <div className="text-wrapper-20">Write a comment</div>
                    <img className="ellipse-3" alt="Ellipse" src={img1} />
                    <img className="vector-3" alt="Vector" src={sss}/>
                </div>
            </div>
            <img className="ellipse-4" alt="Ellipse" src={img1} />
            <div className="text-wrapper-21">Farhan Khan</div>
            <div className="text-wrapper-22">@farhan</div>
            <div className="text-wrapper-23">4m</div>
            <p className="text-wrapper-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img className="rectangle-9" alt="Rectangle" src={im9} />
            <div className="frame-2">
                <div className="group-4">
                    <div className="group-5">
                        <img className="vector-4" alt="Vector" src={like} />
                        <div className="text-wrapper-25">Liked</div>
                    </div>
                    <div className="text-wrapper-26">You and 12k others.</div>
                </div>
                <div className="group-6">
                    <div className="group-7">
                        <div className="text-wrapper-27">Comment</div>
                        <img className="vector-5" alt="Vector" src={comm} />
                    </div>
                    <div className="text-wrapper-28">12 Comments</div>
                </div>
                <div className="group-8">
                    <div className="group-9">
                        <div className="text-wrapper-29">Share</div>
                        <img className="vector-6" alt="Vector" src={share} />
                    </div>
                    <div className="text-wrapper-26">3 Shares</div>
                </div>
            </div>
        </div>
        <div className="overlap-6">
            <div className="feed-sec-2">
                <div className="comment-sec">
                    <div className="overlap-group-4">
                        <div className="text-wrapper-20">Write a comment</div>
                        <img className="ellipse-3" alt="Ellipse" src={img1} />
                        <img className="vector-3" alt="Vector" src={sss} />
                    </div>
                </div>
                <img className="ellipse-4" alt="Ellipse" src="ellipse-248-2.png" />
                <div className="text-wrapper-21">Farhan Khan</div>
                <div className="text-wrapper-22">@farhan</div>
                <div className="text-wrapper-23">2d</div>
                <p className="text-wrapper-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img className="rectangle-9" alt="Rectangle" src={img3} />
                <div className="frame-2">
                    <div className="group-4">
                        <div className="group-5">
                            <img className="vector-4" alt="Vector" src={like}/>
                            <div className="text-wrapper-25">Liked</div>
                        </div>
                        <div className="text-wrapper-26">You and 12k others.</div>
                    </div>
                    <div className="group-6">
                        <div className="group-7">
                            <div className="text-wrapper-27">Comment</div>
                            <img className="vector-5" alt="Vector" src={comm}/>
                        </div>
                        <div className="text-wrapper-28">12 Comments</div>
                    </div>
                    <div className="group-8">
                        <div className="group-9">
                            <div className="text-wrapper-29">Share</div>
                            <img className="vector-6" alt="Vector" src={share}  />
                        </div>
                        <div className="text-wrapper-26">3 Shares</div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="my-group-sec">
            <div className="overlap-7">
                <div className="group-wrapper">
                    <div className="group-11">
                        <div className="overlap-group-6">
                            <div className="text-wrapper-30">My Groups</div>
                        </div>
                    </div>
                </div>
                <div className="group-12">
                    <div className="frame-4">
                        <div className="text-wrapper-31">View</div>
                    </div>
                    <img className="photo" alt="Photo" src="photo-1.png" />
                    <div className="text-wrapper-32">Zalando</div>
                    <div className="text-wrapper-33">24k M</div>
                </div>
                <div className="group-13">
                    <div className="frame-5">
                        <div className="text-wrapper-31">View</div>
                    </div>
                    <div className="text-wrapper-34">Zara</div>
                    <div className="text-wrapper-35">24k M</div>
                </div>
                <div className="group-14">
                    <div className="frame-5">
                        <div className="text-wrapper-31">View</div>
                    </div>
                    <div className="text-wrapper-34">Cartier</div>
                    <div className="text-wrapper-35">24k M</div>
                </div>
                <div className="text-wrapper-36">See All Groups</div>
                <img className="photo-2" alt="Photo" src="photo-2.png" />
                <img className="photo-3" alt="Photo" src="photo-3.png" />
                <div className="frame-6">
                    <div className="text-wrapper-37">Exclusive Groups</div>
                    <img className="vector-9" alt="Vector" src="vector-10.svg" />
                </div>
            </div>
        </div>
       
    </div>
</div>

</div>
<Footer/>

</div>
)

{/* // <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"  onChange={(e)=>{profileUpload(e)}} />
// <button>submit</button> */}
{/* // </div> */}
  
  
};

export default EditProfile
