import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';

import './App.css';
import SignUp from './components/SignUp';

const App: React.FC = () => {
  const [view, setView] = useState("signup");

  useEffect(() => {
  
  }, []);

  const renderView = () => {
    if (view === "signin") {
      return <SignIn />;
    }
    if (view === "signup") {
      return <SignUp />;
    }
  };

  return (

    <div className="App">
      {renderView()}
    </div>

  );
}

export default App;
