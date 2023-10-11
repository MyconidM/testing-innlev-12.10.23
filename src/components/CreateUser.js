const CreateUser = ({ username, setUsername, password, setPassword, submitUser}) => {
    const handleUsername = (event) => {
        setUsername(event.target.value)
        console.log("Change Username ", event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
        console.log("Change Password ", event.target.value)
    }

    
    return (
        <form className="" onSubmit={submitUser}>
            <input 
            type="text"
            placeholder="Username" 
            onChange={handleUsername}
            value={username}
            />      
            <input 
            type="text"
            placeholder="Password" 
            onChange={handlePassword}
            value={password}
            /> 
            <div><button className="bg-slate-300 p-1 rounded " type="submit">Create user</button></div>
        </form>
        
        
    )
}
export default CreateUser