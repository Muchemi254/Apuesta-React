import React, { Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const loadingMarkup =(
  <div className="py-4 text-center">
    <h2>Loading..</h2>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
      <App />
    </React.StrictMode>,
  
)
