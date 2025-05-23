// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import {
//   RouterProvider,
// } from "react-router-dom";
// import router from './Router/Router.jsx';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Router/Router.jsx';

import AuthProvider from './providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
          <div className=''>
            <RouterProvider router={router} />
          </div>
        
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
