import React from 'react'

const Signup = () =>
  <form>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="Email" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <input type="submit" value="Sign up" />
  </form>

export default Signup