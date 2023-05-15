import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import BaseLayout from 'src/layouts/BaseLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseLayout></BaseLayout>
  </React.StrictMode>,
)
