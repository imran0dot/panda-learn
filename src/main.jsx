import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './Providers/AuthProvider'
import router from './routs/router'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import axios from 'axios'
import useAuth from './Hooks/useAuth'

const queryClient = new QueryClient()


axios.defaults.baseURL = "http://localhost:3000/";
axios.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("verify_token")}`

  return req
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
