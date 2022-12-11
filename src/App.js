import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let decoded = jwt_decode(credentialResponse.credential);
          alert(
            JSON.stringify(
              {
                Email: decoded.name,
                Firstname: decoded.given_name,
                Lastname: decoded.family_name,
                jti: decoded.jti,
              },
              null,
              4
            )
          );
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default App;
