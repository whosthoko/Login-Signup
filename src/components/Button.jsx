import React from 'react';
import {Button} from 'web3uikit'
import Styled from 'styled-components';

function ButtonLogin () {
    return (
<StyledButtonLogin>
    <div className='buttonlogin' > 
        <Button
            color="red"
            id="test-button-primary"
            onClick={function noRefCheck(){}}
            size="large"
            text="Login"
            theme="primary"
            type="button" />
  </div>
</StyledButtonLogin>
    );
}

export default ButtonLogin;

const StyledButtonLogin = Styled.div`
.buttonlogin {
  position: relative;
  display: flex;
  justify-content: center;

}
    
`