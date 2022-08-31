import useInput from "../../hooks/useInput";

const LoginForm  = () => {
    const email = useInput('email' , ' ')
    const password = useInput('password' , ' ')
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`email: ${email.value} \n password: ${password.value}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder = "Enter your email" {...email}/>
            <input placeholder = "Enter your password" {...password} />
            <button type="submit">LOGIN</button>
        </form>
    )
}
export default LoginForm;