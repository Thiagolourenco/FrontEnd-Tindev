import React, { useState } from "react";

import api from "../../services/api";
import Logo from "../../assets/logo.svg";
import "./style.css";

function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", { username });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={Logo} alt="TinDev" />
        <input
          placeholder="Digite seu usuário do gitHub"
          value={username}
          onChange={text => setUsername(text.target.value)}
        />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Login;
