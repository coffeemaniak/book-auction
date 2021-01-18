import React from "react";
import "./authorization.css"

const Join = () => {
    return (
        <div className="join_block">
            <form>
            <label className="join_email">
                <input type="email" className="join_input" placeholder="E-mail"/>
            </label>
            <label className="join_password">
                <input type="password" className="join_input" placeholder="Password"/>
            </label>
            <label className="join_password">
                <input type="password" className="join_input" placeholder="Confirm password"/>
            </label>
            <button type="submit" className="join_enter">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Join;