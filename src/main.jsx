if (import.meta.hot) {
  import.meta.hot.accept()
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//it hold the entire DOM, the entire application. typically, you just leave it alone.
// App.jsx (or js), on the other hand is where the whole UI and UX design and logic is held
