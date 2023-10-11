const InputUserInfo = ({ userInfo, setUserInfo, placeholder}) => {
    const handleUser = (event) => {
        setUserInfo(event.target.value)
    }
    
    return (
        <input 
            type="text"
            placeholder={placeholder} 
            onChange={handleUser}
            value={userInfo}
        />
    )
}
export default InputUserInfo