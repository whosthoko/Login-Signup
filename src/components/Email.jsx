import React from 'react';
import {Input} from 'web3uikit'
import Styled from 'styled-components';

const Email = ( { setEmail } ) => {
    return (
<StyledEmail>
<div className= 'email'>
      <Input
        label="Email"
          name="Test email Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setEmail(event.currentTarget.value)}
        type="email" />
      </div>
</StyledEmail>
    );
}
export default Email;

const StyledEmail = Styled.div`
.email {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -1rem;
  padding: 3vh;
  color: white;
}
`;