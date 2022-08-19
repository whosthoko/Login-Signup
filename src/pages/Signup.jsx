import {React, useState, useEffect}  from 'react';
import Styled from 'styled-components';
import {useMoralis} from 'react-moralis'
import {Button, Input} from 'web3uikit'
import console from 'console';
import {useNavigate } from 'react-router';

//Multimedia
import Logo from '../assets/multimedia/Logo.png'
import { Alert } from 'react-bootstrap';

const Signup = () => {
  const { signup, isAuthenticated, logout, authenticate} = useMoralis();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState ("");
    const [lastname, setLastname] = useState ("");

const navigate = useNavigate();

useEffect(() => {
  console.log('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);



  return (
  <StyledCard>
      <div>
      <div className='Logo'>
            <img src = {Logo} alt="" />
      </div>
      <div className= 'firstname'>
      <Input
          label="Firstname"
          name="Test Firstname Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setFirstname(event.currentTarget.value)}
          type="text"/>
      </div>
      <div className= 'lastname'>
      <Input
          label="Lastname"
          name="Test Lastname Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setLastname(event.currentTarget.value)}
          type="text"/>
      </div>
      <div className= 'email'>
      <Input
        label="Email"
          name="Test email Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setEmail(event.currentTarget.value)}
        type="email" />
      </div>
      <div className= 'username'>
      <Input
        label="Username"
          name="Test username Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => { setUsername(event.currentTarget.value) }}
        type="text" />
      </div>
      <div className= 'password'>
      <Input
          label="Password"
          name="Test Password Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => { setPassword(event.currentTarget.value) }}
          type="password"/>
      </div>
      <div className='buttonsignup'>
      <Button
          color="red"
          id="test-button-primary"
          onClick= {async () =>
            await signup(username, password, email, {
                firstname: firstname,
                lastname: lastname
            }).then(() => {
                navigate('/login');
            })
          }
          size="large"
          text="Create an Account"
          theme="translucent"
          type="button" />
      </div>
     
  </div>
</StyledCard>
  )

}



export default Signup;

const StyledCard = Styled.div`
height: 100vh;
width: 100%;  
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);


.Logo {  
width: auto;  
text-align: center;  

}  

img {
margin: 0
background-color: none;
          width: 400px;
          border-radius: 5px;
          padding: 1px;
          position: relative;
          top: 75%;
}

.buttonsignup {
position: relative;
display: flex;
justify-content: center;

}
  
.firstname {
margin-top: -6rem;
display: flex;
justify-content: center;
padding: 1vh;
}  

.lastname {
display: flex;
justify-content: center;
padding: 1vh;
}

.email {
position: relative;
display: flex;
justify-content: center;
margin-top: -1rem;
padding: 3vh;
color: white;
}

.username {
position: relative;
display: flex;
justify-content: center;
margin-top: -2rem;
padding: 3vh;
color: red;
}

.password {
display: flex;
justify-content: center;
margin-top: -1rem;
padding: 1vh;
}
`;