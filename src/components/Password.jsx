import React from 'react';
import {Input} from 'web3uikit'
import Styled from 'styled-components';

const Password= ( { setPassword} ) => {
    return (
<StyledPassword>
<div className= 'password'>
      <Input
          label="Password"
          name="Test Password Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => { setPassword(event.currentTarget.value) }}
          type="password"/>
      </div>
</StyledPassword>
    );
}

export default Password;

const StyledPassword = Styled.div`
.password {
  display: flex;
  justify-content: center;
  margin-top: -1rem;
  padding: 1vh;
}
`