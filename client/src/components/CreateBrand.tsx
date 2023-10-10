import React from "react";
import '../styles/CreateBrand.css'
export default function CreateBrand (){
    return (<div>
<h1 className="title">Add Brand</h1>
<div className="brand-name">
<p >Name of the Brand:</p>
<br></br>
<input type="text" />
</div>
<div className="brand-Image">
<p>Insert your image:</p>
<br></br>
<input type="file" /></div>
    </div>)
}