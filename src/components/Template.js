import React from 'react'

const Template = (title , desc1, desc2,image, formtype,setIsLoggedIn) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formtype ==="signup"?(<SignupForm/>):(<LoginForm/>)
        }
    </div>
  )
}

export default Template