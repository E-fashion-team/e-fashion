import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct,addProduct  } from '../store/CreateProductSlice';
import Modal from 'react-modal';
import '../styles/CreateProduct.module..css';
import { AppDispatch } from '../store';
import NavBar from './NavBar';
import Footer from './Footer';


interface User {
  id: number;
  role: string;
  name: string;
}

const CreateProduct = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [typeProd, setTypeProd] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedPrice = parseFloat(price);
    const productType = user.role === 'fashionista' ? 'NFT' : 'product';
    const formData = { name, price: parsedPrice, image, userId: user.id, category, typeProd: productType };
    if ((user.role === 'brand' && productType === 'product') || (user.role === 'fashionista' && productType === 'NFT')) {
      dispatch(addProduct(formData));
    } else {  
      alert(`You are not authorized to add products of type ${productType}.`);
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  if (user.role !== 'brand') {
    return (
      <div>
    <NavBar/>
      <div className="create-product-container">
        <h1 className="title">Welcome, {user.name}!</h1>
        <button className="error-button" onClick={() => setModalIsOpen(true)}>Create Product</button>
        <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
          <div className="error-message">You are not authorized to add products.</div>
          <button className="modal-button" onClick={handleModalClose}>Close</button>
        </Modal>
      </div>
      </div>
    );
  }

  return (
    <div>
       <NavBar/>
    <div className="create-product-container">
      <h1 className="title">Welcome, {user.name}!</h1>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <label className="form-label">
          <input className="form-input" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <div className="group---Item" />
        <br />
        <label className="form-label">
          <select className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Select a category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="other">Other</option>
          </select>
        </label>
        <div className="group---Item1" />

        <br />
        <label className="form-label">
          <input className="form-input" placeholder='Price' type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <div className="group---Item2" />

        <br />
        <label className="form-label">
          <input className="form-input" placeholder='Image' value={image} onChange={(event) => setImage(event.target.value)} />
        </label>
        <div className="group---Item3" />

        <br />
        <button className="form-button" type="submit">Create Product</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default CreateProduct;
