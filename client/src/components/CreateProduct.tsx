import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../store/CreateProductSlice';
import Modal from 'react-modal';
import '../styles/CreateProduct.module..css';

interface User {
  id: number;
  role: string;
  name: string;
}

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createProduct({ name, price, image, userId: user.id, category: category }));
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  if (user.role !== 'brand') {
    return (
      <div className="create-product-container">
        <h1>Welcome, {user.name}!</h1>
        <button className="error-button" onClick={() => setModalIsOpen(true)}>
          Create Product
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
          <div>You are not authorized to add products.</div>
          <button onClick={handleModalClose}>Close</button>
        </Modal>
      </div>
    );
  }

  return (
    <div className="create-product-container">
      <h1>Welcome, {user.name}!</h1>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <div>
          Name:
          <input type="text" className="form-input" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          Category:
          <textarea className="form-input" value={category} onChange={(event) => setCategory(event.target.value)} />
        </div>
        <div>
          Price:
          <input type="number" className="form-input" value={price} onChange={(event) => setPrice(Number(event.target.value))} />
        </div>
        <div>
          Image:
          <input type="text" className="form-input" value={image} onChange={(event) => setImage(event.target.value)} />
        </div>
        <button className="form-button" type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
