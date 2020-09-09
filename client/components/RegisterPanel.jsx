import React from 'react';

function RegisterPanel(props) {
  const {
    newUsername,
    newPassword,
    newNickname,
    setNewUsername,
    setNewPassword,
    setNewNickname,
    setLoggedinUser,
  } = props;

  function handleCreateNewUser(name, password, nickname) {
    fetch('/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        nickname: nickname,
        password: password,
        readings: [],
      }),
    })
      .then((data) => data.json)
      .then((newUser) => setLoggedinUser(newUser))
      .catch((err) => console.log(err));
  }

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
        <button
          onClick={(e) => {
            e.preventDefault(),
              handleCreateNewUser(newUsername, newPassword, newNickname);
          }}
        >
          Create new user
        </button>
      </div>
    </>
  );
}

export default RegisterPanel;
