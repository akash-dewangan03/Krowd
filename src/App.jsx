import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setErrorMessage('');
  };

  const handleAddItem = () => {
    if (inputText.trim() === '') {
      setErrorMessage('Item cannot be empty.');
      return;
    }
    if (items.includes(inputText.trim())) {
      setErrorMessage('Item already exists.');
      return;
    }

    setItems([...items, inputText.trim()]);
    setInputText('');
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="app-container">
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter item"
        aria-label="Item input"
      />
      <button onClick={handleAddItem}>Add Item</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
