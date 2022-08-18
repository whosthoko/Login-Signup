import React from 'react';
import {Form} from 'web3uikit'
import Styled from 'styled-components';

const Createaccount = ( { setCreateaccount } ) => {
return (
<StyledCard>
    <div className='Createaccount'>
    
    <Form
  buttonConfig={{
    onClick: function noRefCheck(){},
    theme: 'primary'
  }}
  data={[
    {
      inputWidth: '100%',
      name: 'First Name',
      type: 'text',
      validation: {
        required: true
      },
      value: ''
    },
    {
        inputWidth: '100%',
        name: 'Last Name',
        type: 'text',
        validation: {
            required: true
          },
        value: ''
    },
    {
      inputWidth: '100%',
      name: 'Email',
      type: 'email',
      validation: {
        regExp: '^[^@s]+@[^@s]+.[^@s]+$',
        required: true
      },
      value: ''
    },
    {
      name: 'Username',
      type: 'text',
      validation: {
        required: true
      },
      value: ''
    },
    {
      name: 'Password',
      type: 'password',
      validation: {
        characterMaxLength: 20,
        characterMinLength: 6,
        required: true
      },
      value: ''
    }
  ]}
  onSubmit={function noRefCheck(){}}
  title="Create An Account"
/>
</div>
</StyledCard>
    )
}

export default Createaccount