import React from 'react';
import {Input} from 'web3uikit'
import Styled from 'styled-components';

const Lastname= ( { setLastname} ) => {
    return (
<StyledLastname>
<div className= 'lastname'>
      <Input
          label="Lastname"
          name="Test Lastname Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setLastname(event.currentTarget.value)}
          type="text"/>
      </div>
</StyledLastname>
    );
}

export default Lastname;

const StyledLastname = Styled.div`
.lastname {
  display: flex;
  justify-content: center;
  padding: 1vh;
}
`