import React from 'react';

function LoginPanel(props) {
  const {
    setUsername,
    setPassword,
    username,
    password,
    setLoggedinUser,
  } = props;

  function handleLogin(enteredUsername, enteredPassword) {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
      }),
    })
      .then((data) => data.json())
      .then((newUser) => {
        console.log(newUser);
        setLoggedinUser(newUser);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className='login-panel'>
        <h1>Login</h1>
        <input
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          disabled={!username || !password ? true : false}
          onClick={() => handleLogin(username, password)}
        >
          login
        </button>
      </div>
    </>
  );
}

export default LoginPanel;
