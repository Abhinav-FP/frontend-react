import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate=useNavigate();
  return (
    <div className='w-100 h-100 error'>
    <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
            The page you’re looking for doesn’t exist.
          </p>
        {/* <Link to="/" class="btn btn-primary">Go Home</Link> */}
        <btn class="btn btn-primary me-5" onClick={() => navigate("/")} >Go Home</btn>
        <btn class="btn btn-primary" onClick={() => navigate(-1)} >Go Previous Page</btn>
    </div>
</div>
</div>
  )
}
