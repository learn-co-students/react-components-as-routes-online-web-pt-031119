import React from 'react'

const Login = () => 
<form>
  <div>
    <input type="text" name="username" placeholder="Username" />
    <label htmlFor="username">Username</label>
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" />
    <label htmlFor="password">Password</label>
  </div>
  <input type="submit" value="login" />
</form>

export default Login