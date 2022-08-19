import React, {useState}  from 'react';
import Styled from 'styled-components';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link } from 'react-router-dom';

import Logo from '../assets/multimedia/Logo.png'

const Signup = () => {
    const { signup, isAuthenticated, user } = useMoralis();

    const [firstname, setFirstname] = useState ("");
    const [lastname, setLastname] = useState ("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
   return (
       <div>
           
       </div>
   )
}