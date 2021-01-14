import React from "react";
import "./login.css"

const Login = () => {
    return (
        <div className="login_block">
            <form>
            <label className="login_email">
                <input type="email" className="login_input" placeholder="E-mail"/>
            </label>
            <label className="login_password">
                <input type="password" className="password_input" placeholder="Password"/>
            </label>
            <button type="submit" className="login_enter">Войти</button>
            </form>
        </div>
    )
}

export default Login;