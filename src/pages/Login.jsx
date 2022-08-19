import {React, useState, useEffect}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import {Input} from 'web3uikit'

//CSS
import Styled from 'styled-components';

//Media
import Logo from '../assets/multimedia/Logo.png';


//Components

import Button from '../components/Button'


  const Login = () => {
    const { login, isAuthenticated } = useMoralis();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        <div className='username'>
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
        <div className = 'Signup'>
          <Link to= '/Signup' >Or Create An Account</Link>
        </div>
        <div className='buttonlogin' >
          <Button onClick={async () => 
            await login(username, password)
            .then(() => {navigate('/Profile');
            }
          )
        }/>
                  
          </div>   
    </div>
    </StyledCard>


  );
  
}



export default Login;

const StyledCard = Styled.div`

  height: 100vh;
  width: 100%;  
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);


.Logo {  
width: auto;  
text-align: center;  

}  

img {
  background-color: none;
            width: 400px;
            border-radius: 5px;
            padding: 1px;
            position: relative;
            top: 75%;
}

.Signup {
  display: flex;
  justify-content: center;
  padding: 4vh;
}
 
    `;