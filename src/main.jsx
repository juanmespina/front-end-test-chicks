import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from 'src/layout/BaseLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseLayout></BaseLayout>
  </React.StrictMode>,
)
