import React from 'react';
import {Input} from 'web3uikit'
import Styled from 'styled-components';

const Username= ( { setUsername } ) => {
    return (
<StyledUsername>
<div className= 'username'>
      <Input
        label="Username"
          name="Test username Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => { setUsername(event.currentTarget.value) }}
        type="text" />
      </div>
</StyledUsername>
    );
}
export default Username;

const StyledUsername = Styled.div`
.username {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -2rem;
  padding: 3vh;
  color: red;
}
`;