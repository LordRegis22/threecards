import React from 'react';

function RegisterPanel(props) {
  const {
    setUsername,
    setPassword,
    setNewUsername,
    setNewPassword,
    setNewNickname,
  } = props;
  return (
    <>
      <div>
        <h1>Register</h1>
        <input
          placeholder='Nickname'
          onChange={(e) => setNewNickname(e.target.value)}
        ></input>
        <input
          placeholder='New Username'
          onChange={(e) => setNewUsername(e.target.value)}
        ></input>
        <input
          placeholder='New Password'
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        ></input>
        <button>login</button>
      </div>
    </>
  );
}

export default RegisterPanel;
