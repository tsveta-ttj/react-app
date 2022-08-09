export const Register = () => {
    return (

        <form id="register">
            <div className="form-container">
                <h1>Register</h1>
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@mail.com"
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Mims"
                />

                <label htmlFor="pass">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="register-password" />

                <label htmlFor="repass">Confirm Password:</label>
                <input type="password" name="repass" id="repass" />
                
                <button type="submit" >Register</button>

                <p className="field">
                    <span>
                        If you already have profile click <a href="#">here</a>
                    </span>
                </p>
            </div>
        </form>
    );

};