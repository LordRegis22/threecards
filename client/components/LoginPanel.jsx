import React from 'react';

function LoginPanel(props) {
  const { setUsername, setPassword, username, password } = props;

  function handleLogin(username, password) {}
  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>login</button>
      </div>
    </>
  );
}

export default LoginPanel;
