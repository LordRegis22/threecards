import React from 'react';

function LoginPanel(props) {
  const { setNewUsername } = props;
  return (
    <div>
      <h1>test</h1>
      <input
        placeholder='username'
        onChange={(e) => setNewUsername(e.target.value)}
      ></input>
      <input placeholder='password'></input>
      <button>login</button>
    </div>
  );
}

export default LoginPanel;
