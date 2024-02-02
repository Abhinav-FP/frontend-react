import React from 'react'

export default function Profile() {
    const profiledata = localStorage && localStorage.getItem("form")
 const recode = JSON.parse(profiledata);

    return (
    <div className='container'>
        <h1>Your Profile</h1>
        <p>Name: {recode.name}</p>
        <p>Email-id: {recode.email}</p>
        <p>Contact: {recode.number}</p>
    </div>
  )
}
