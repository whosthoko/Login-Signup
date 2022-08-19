import React from 'react';
import {Input} from 'web3uikit'
import Styled from 'styled-components';

const Firstname = ( { setFirstname} ) => {
    return (
<StyledFirstname>
<div className= 'firstname'>
      <Input
          label="Firstname"
          name="Test Firstname Input"
          onBlur={function noRefCheck(){}}
          onChange={(event) => setFirstname(event.currentTarget.value)}
          type="text"/>
      </div>
</StyledFirstname>
    );
}

export default Firstname;

const StyledFirstname = Styled.div`
.firstname {
margin-top: -6rem;
  display: flex;
  justify-content: center;
  padding: 1vh;
}
`