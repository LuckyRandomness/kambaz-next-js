export default function Signin() {
  return (
    <div id="Signin">
      <h2>Sign In Page</h2>
      <div>
        <input
            value="alice"
            type="text"
            title="Please enter your username" 
            placeholder="i.e., johndoe"
        />
      </div>
        <div>
        <input 
            value="123"
            type="password"
            title="Please enter your password" 
            placeholder="Your password"
        />
        </div>
    </div>
  );
}