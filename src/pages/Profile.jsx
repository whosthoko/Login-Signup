import {React}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link } from 'react-router-dom';
import {Input, Button} from 'web3uikit'

//CSS
import Styled from 'styled-components';

function Profile () {
    const {user} = useMoralis ();
return (
<StyledProfile>
    <div>
    <ul className="navbarhome">
    <li> <Link to= '/Profile' >Profile</Link> </li>
    <li> <Link to= '/Wardrobe' >Wardrobe</Link> </li>
    <li><Link to= 'Purchases' >Purchases</Link></li>
    </ul>
     <div className="PersonalInfo">
        <div className="Firstname">
            <h2>Firstname</h2>
            
        </div>
        <div className="Lastname">
            <h2>Lastname</h2>
            
        </div>
        <div className="Email">
            <h2>Email</h2>
        
        </div>
        <div className="Username">
            <h2>Username</h2>
            <Button
            id="test-button-primary"
                onClick={function noRefCheck(){}}
                    text="Edit Profile"
                    theme="translucent"
                    size="large"
                    type="button"/>
        </div>    
        <div className="Password">
            <h2>Password</h2>
            <Button
                onClick={function noRefCheck(){}}
                    text="Change Password"
                    theme="translucent"
                    size="large" />
        </div>
        </div>

    
    </div>
</StyledProfile>
    )
};

export default Profile;

const StyledProfile = Styled.div`

height: 100vh;
width: 100%;  
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);


.PersonalInfo {
margin-left: 25rem;
text-align: center;
display: inline-block;
margin-top: 3rem;

}  

.navbarhome {
  flex: 1;
  text-align: left;
  display: inline-block;
  float: left;
  margin: 10vh;
  padding: 2rem;
  margin-bottom: 10rem
  margin-right: 5rem;
  
}

.navbarhome li {
  list-style: none;
  display: block;
  padding-bottom: 0px;
  position: relative;
  margin: 4rem;
  
}

a {
  color: white;
  text-decoration: none;
  font-size: 2.2rem;
}

.Firstname {
    padding: 2vh;
}

.Lastname {
    padding: 2vh;
}

.Email {
    padding: 2vh;
}

.Username {
    padding: 2vh;
}

.Password {
    padding: 2vh;
}

.h2 {
    color: white;
}
`
