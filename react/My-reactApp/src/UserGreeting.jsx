
function UserGreeting(props) {
    return(props.isLoggedIn ? 
    <h2 className="welcome page"> Welcome back {props.username}</h2>:
    <h2 className="login-prompt">please sign in</h2>)
  
    
    
}
export default UserGreeting;