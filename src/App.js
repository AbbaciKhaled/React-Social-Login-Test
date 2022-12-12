import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function App() {
  const responseFacebook = (response) => {
    alert(
      JSON.stringify(
        {
          Email: response.email,
          Firstname: response.first_name,
          Lastname: response.last_name,
          userID: response.userID,
        },
        null,
        4
      )
    );
  };

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
      <FacebookLogin
        appId="461253366162675"
        fields="name,email,picture,first_name,last_name"
        autoLoad
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>FB button</button>
        )}
      />
    </div>
  );
}

export default App;
