
import img1 from "../../images//Ellipse 251.png"
import img2 from "../../images/Cover Image.png"
import img3 from "../../images/Rectangle 1901 (1).png"
import axios from "axios"

import img4 from "../../images/Rectangle 1889.png"

import React,{ useState,FunctionComponent } from "react";
import   "../../styles/editProfile1.css"


const EditProfile: FunctionComponent = () => {
  const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
const [adress,setAdress]=useState("")
const [userClient,setUser]=useState({email:"email",name:'name',password:"password"})

const  updateAccout=()=>{
  if(firstName==="" || lastName==="" || email==="" || currentPassword==="" || newPassword==="" || confirmPassword==="" || confirmPassword==="" || adress===""){
      alert("Please Enter your data ")
      return 
  } 
  if(userClient.password!==currentPassword){
    
      alert("Wrong Password ")
      return 
  }  
   if(userClient.password===currentPassword   && newPassword===confirmPassword){
      userClient.password=newPassword
      userClient.name=firstName+lastName
      userClient.email=email
      return 
  }
}
//   const [img,setImg]=useState('')

  // const handleImg=(e:any)=> {
  //   setImg(e.target.files[0])
  // }
  const profileUpload= async (e:any)=>{
const formData=new FormData()
formData.append("file",e.target.files[0])
formData.append("upload_preset","oztadvnr")

await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
console.log(response.data["secure_url"])
}).catch((error)=>{
  throw error
})

  }
// const handleSubmit= async()=>{
// await profileUpload(img)
// }

  return (
//     <div className="editProfilePage">
//       <div className="backgroundImage" />
//       {/* <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" /> */}
//       <div className="banner">
//         <img
//           className="coverImageIcon"
//           alt=""
//           src={img2}
//         />
//         <div className="editCoverImage"> 
//           <img className="vectorIcon"  alt="" src="/vector.svg" />
//         </div>
//         <div className="editProfile">
//           <img className="vectorIcon" alt="" src="/vector1.svg" />
     
//           <div     data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit Profile</div>
//           <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
    

//       <div
//         style={{
//           left: '80px',
//           top: '84px',
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: '50px',
//           display: 'flex',
//         }}
//       >
//         <div
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             gap: '8px',
//             display: 'flex',
//           }}
//         >
//           <div
//             style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//           >
//             First Name
//           </div>
//           <div
//             style={{
//               width: '330px',
//               height: '50px',
//               position: 'relative',
//             }}
//           >
//             <input
           
//               style={{
                
//                 width: '330px',
//                 height: '50px',
//                 left: '0px',
//                 top: '0px',
//                 position: 'absolute',
//                 background: '#F5F5F5',
//                 borderRadius: '4px',
//               }}
//             onChange={(e)=>{
//                 setFirstName(e.target.value)
//             }} ></input>
            
//           </div>
//         </div>
//         <div
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             gap: '8px',
//             display: 'flex',
//           }}
//         >
//           <div
//             style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//           >
//             Last Name
//           </div>
//           <div
//             style={{
//               width: '330px',
//               height: '50px',
//               position: 'relative',
//             }}
//           >
//             <input  onChange={(e)=>{
//                 setLastName(e.target.value)
//             }} 
//               style={{
//                 width: '330px',
//                 height: '50px',
//                 left: '0px',
//                 top: '0px',
//                 position: 'absolute',
//                 background: '#F5F5F5',
//                 borderRadius: '4px',
//               }}
//             ></input>
          
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           left: '80px',
//           top: '190px',
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: '50px',
//           display: 'flex',
//         }}
//       >
//         <div
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             gap: '8px',
//             display: 'flex',
//           }}
//         >
//           <div
//             style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//           >
//             Email
//           </div>
//           <div
//             style={{
//               width: '330px',
//               height: '50px',
//               position: 'relative',
//             }}
//           >
//             <input 
            
//             onChange={(e)=>{
//                 setEmail(e.target.value)
//             }} placeholder="email"
//               style={{
//                 width: '330px',
//                 height: '50px',
//                 left: '0px',
//                 top: '0px',
//                 position: 'absolute',
//                 background: '#F5F5F5',
//                 borderRadius: '4px',
//               }}
//             ></input>
        
//           </div>
//         </div>
//         <div
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             gap: '8px',
//             display: 'flex',
//           }}
//         >
//           <div
//             style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//           >
//             Address
//           </div>
//           <div
//             style={{
//               width: '330px',
//               height: '50px',
//               position: 'relative',
//             }}
//           >
//             <input   onChange={(e)=>{
//                 setAdress(e.target.value)
//             }}
//               style={{
//                 width: '330px',
//                 height: '50px',
//                 left: '0px',
//                 top: '0px',
//                 position: 'absolute',
//                 background: '#F5F5F5',
//                 borderRadius: '4px',
//               }}
//             ></input>
            
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           left: '80px',
//           top: '296px',
//           position: 'absolute',
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: '16px',
//           display: 'flex',
//         }}
//       >
//         <div
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             gap: '8px',
//             display: 'flex',
//           }}
//         >
    
//           <div
//             style={{
//               width: '710px',
//               height: '50px',
//               position: 'relative',
//             }}
//           >
//             <input  onChange={(e)=>{
//                 setCurrentPassword(e.target.value)
//             }} placeholder="current password"
//               style={{
//                 width: '710px',
//                 height: '50px',
//                 left: '0px',
//                 top: '0px',
//                 position: 'absolute',
//                 background: '#F5F5F5',
//                 borderRadius: '4px',
//               }}
//             ></input>
      
//           </div>
//         </div>
//         <div
//           style={{
//             width: '710px',
//             height: '50px',
//             position: 'relative',
//           }}
//         >
//         <input  onChange={(e)=>{
//                 setNewPassword(e.target.value)
//             }} placeholder=  " New Password " 
//             style={{
//               width: '710px',
//               height: '50px',
//               left: '0px',
//               top: '0px',
//               position: 'absolute',
//               background: '#F5F5F5',
//               borderRadius: '4px',
//             }}
//           ></input>
       
//         </div>
//         <div
//           style={{
//             width: '710px',
//             height: '50px',
//             position: 'relative',
//           }}
//         >
//           <input  onChange={(e)=>{
//                 setConfirmPassword(e.target.value)
//             }}placeholder=" Confirm new password"
//             style={{
//               width: '710px',
//               height: '50px',
//               left: '0px',
//               top: '0px',
//               position: 'absolute',
//               background: '#F5F5F5',
//               borderRadius: '4px',
//             }}
//           ></input>
         
//         </div>
//       </div>
//       <div
//         style={{
//           left: '487px',
//           top: '534px',
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           gap: '32px',
//           display: 'flex',
//         }}
//       >
//         <div
//            style={{
//             paddingLeft: '48px',
//             paddingRight: '48px',
//             paddingTop: '16px',
//             paddingBottom: '16px',
//             background: '#DB4444',
//             borderRadius: '4px',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '10px',
//             display: 'flex',
//           }}
//      >
//        save
//         </div>
//         <div
//           style={{
//             paddingLeft: '48px',
//             paddingRight: '48px',
//             paddingTop: '16px',
//             paddingBottom: '16px',
//             background: '#DB4444',
//             borderRadius: '4px',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '10px',
//             display: 'flex',
//           }}
//         >
//           {/* <button type="button" className="view"
//             style={{
//               color: '#FAFAFA',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '500',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//             >
//             Save Changes
//           </button> */}
//           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//         </div>
     
  
//       </div>
    
//     </div>
//   </div>
// </div>
//         </div>
//         <img className="profilePicIcon" alt="" src={img1} />
//         <div className="text">
//           <div className="farhanKhan">Farhan Khan</div>
//           <div className="farhan">@farhan</div>
//           <div className="loremIpsumDolor1">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
//             consectetur purus amet
//           </div>
//         </div>
//       </div>
//       <div className="photosSec">
//         <div className="rectangleParent">
//           <div className="groupChild "/>
        
//           {/* <div className="photos" onClick={()=>{console.log('photo')}}>Photos</div> */}
//           <div className="seeAllPhotos">See All Photos</div>
//         </div>
//         <img
//           className="photosSecChild"
//           alt=""
//           src={img3}
//         />
//         <img
//           className="photosSecItem"
//           alt=""
//           src="/rectangle-1909@2x.png"
//         />
//         <img
//           className="photosSecInner"
//           alt=""
//           src="/rectangle-1912@2x.png"
//         />
//         <img
//           className="rectangleIcon"
//           alt=""
//           src="/rectangle-1907@2x.png"
//         />
//         <img
//           className="photosSecChild1"
//           alt=""
//           src="/rectangle-1910@2x.png"
//         />
//         <img
//           className="photosSecChild2"
//           alt=""
//           src="/rectangle-1913@2x.png"
//         />
//         <img
//           className="photosSecChild3"
//           alt=""
//           src="/rectangle-1908@2x.png"
//         />
//         <img
//           className="photosSecChild4"
//           alt=""
//           src={img3}
//         />
//       </div>
//       <div className="feedSec1">
//         <div className="commentSec">
//           <div className="commentSec2Child" />
//           <input className="writeAComment"    placeholder="Write a comment"/>
//           <img
//             className="commentSec2Item"
//             alt=""
//             src={img1}
//           />
//           <img className="vectorIcon2 "alt="" src="/vector2.svg" />
//         </div>
//         <img
//           className="feedSec1Child"
//           alt=""
//           src={img1}
//         />
//         <div className="farhanKhan1">Farhan Khan</div>
//         <div className="farhan1">@farhan</div>
//         <div className="m">4m</div>
//         <div className="loremIpsumDolor2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </div>
//         <img
//           className="feedSec1Item"
//           alt=""
//           src={img3}
//         />
//         <div className="groupParent">
//           <div className="groupContainer">
//             <div className="vectorParent">
//               <img className="vectorIcon3" alt=""  />
//               <div className="liked">Liked</div>
//             </div>
//             <div className="youAnd12k"></div>
//           </div>
//           <div className="groupDiv">
//             <div className="commentParent">
//               <div className="comment">Comment</div>
//               <img className="vectorIcon4" alt=""  />
//             </div>
//             <div className="comments"></div>
//           </div>
//           <div className="groupParent1">
//             <div className="shareParent">
//               <div className="share">Share</div>
//               <img className="vectorIcon5" alt="" />
//             </div>
//             <div className="shares"></div>
//           </div>
//         </div>
//       </div>
    
//       <div className="myGroupSec">
//         <div className="myGroupSecInner">
//           <div className="rectangleGroup">
//             <div className="groupItem" />
//             <div className="myGroups">My Groups</div>
//           </div>
//         </div>
//         <div className="frameParent">
//           <div className="viewWrapper">
//             <div className="view">View</div>
//           </div>
//           <img className="photo1Icon" alt="" src="/photo1@2x.png" />
//           <b className="zalando">Zalando</b>
//           <div className="kM">24k M</div>
//         </div>
//         <div className="frameGroup">
//           <div className="viewContainer">
//             <div className="view">View</div>
//           </div>
//           <b className="zara">Zara</b>
//           <div className="kM1">24k M</div>
//         </div>
//         <div className="frameContainer">
//           <div className="viewContainer">
//             <div className="view">View</div>
//           </div>
//           <b className="zara">Cartier</b>
//           <div className="kM1">24k M</div>
//         </div>
//         <div className="seeAllGroups">See All Groups</div>
//         <img className="photo2Icon" alt="" src="/photo2@2x.png" />
//         <img className="photo3Icon" alt="" src="/photo3@2x.png" />
//         <div className="exclusiveGroupsParent">
//           <div className="exclusiveGroups">Exclusive Groups</div>
//           <img className="vectorIcon10" alt="" src="/vector10.svg" />
//         </div>
//       </div>
//       <div className="groupParent5">
//         <div className="groupParent6">
//           <div className="rectangleWrapper">
//             <div className="groupInner" />
//           </div>
//           <img className="vectorIcon11" alt="" src="/vector11.svg" />
//         </div>
//         <div className="rectangleContainer">
//           <div className="rectangleDiv" />
//           <div className="groupChild1" />
//           <div className="ellipseDiv" />
//         </div>
//         <div className="groupParent6">
//           <div className="rectangleWrapper">
//             <div className="groupInner" />
//           </div>
//           <img className="vectorIcon12" alt="" src="/vector12.svg" />
//         </div>
//       </div>
//       <div className="metaLookSec">
//         <div className="groupItem" />
//         <div className="metaLook">Meta Look</div>
//         <img
//           className="metaLookSecItem"
//           alt=""
//           src={img4}
//         />
//         <div className="groupParent8">
//           <div className="groupParent9">
//             <div className="rectangleWrapper1">
//               <div className="groupChild3" />
//             </div>
//             <img className="vectorIcon13" alt="" src="/vector13.svg" />
//           </div>
//           <div className="rectangleParent1">
//             <div className="groupChild4" />
//             <div className="groupChild5" />
//             <div className="groupChild6" />
//           </div>
//           <div className="groupParent9">
//             <div className="rectangleWrapper1">
//               <div className="groupChild3" />
//             </div>
//             <img className="vectorIcon14" alt="" src="/vector14.svg" />
//           </div>
//         </div>
//       </div>
     
    
//     </div>
 <div>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"  onChange={(e)=>{profileUpload(e)}} />
<button>submit</button>
</div>
  
  );
};

export default EditProfile
