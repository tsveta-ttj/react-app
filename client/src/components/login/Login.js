export const Login = () =>{
    return (

        <form id="login" action="">
            <div className="form-container">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <button type="submit" >Login</button>
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>


            </div>
        </form>

    );
    
};