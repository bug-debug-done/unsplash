import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import serchImages from './api';

serchImages();

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(<App />);

// export default App;
