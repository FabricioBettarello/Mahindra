
const Login = () => {
    return (
        <>
            <section>
                <form action="">
                    <div class="container">
                        <h1>Login</h1>
                        <label for="uname"><b>Usuário</b></label>
                        <input type="text" placeholder="Digite o usuário" name="uname" required />
                        <br />
                        <label for="psw"><b>Senha</b></label>
                        <input type="password" placeholder="Digite a senha" name="psw" required />
                        <br />
                        <label class="checkbox-container">Lembrar de mim?
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <br />
                        <button type="submit" class="btn" onclick="login()">Login</button>
                        <hr />
                        <br />
                        <h3>Ainda não tem conta? Crie agora mesmo!</h3>
                        <button type="submit" class="btn" onclick="criar()">Criar conta</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login