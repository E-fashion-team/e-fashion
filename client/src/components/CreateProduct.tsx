import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct,addProduct  } from '../store/CreateProductSlice';
import Modal from 'react-modal';
import '../styles/CreateProduct.module..css';
import { AppDispatch } from '../store';


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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedPrice = parseFloat(price);
    dispatch(addProduct({ name, price: parsedPrice, image, userId: user.id, category }));
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  if (user.role !== 'brand') {
    return (
      <div className="create-product-container">
        <h1 className="title">Welcome, {user.name}!</h1>
        <button className="error-button" onClick={() => setModalIsOpen(true)}>Create Product</button>
        <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
          <div className="error-message">You are not authorized to add products.</div>
          <button className="modal-button" onClick={handleModalClose}>Close</button>
        </Modal>
      </div>
    );
  }

  return (
    <div className="create-product-container">
      <h1 className="title">Welcome, {user.name}!</h1>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input className="form-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label className="form-label">
          Category:
          <select className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Select a category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label className="form-label">
          Price:
          <input className="form-input" type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <br />
        <label className="form-label">
          Image:
          <input className="form-input" type="text" value={image} onChange={(event) => setImage(event.target.value)} />
        </label>
        <br />
        <button className="form-button" type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
