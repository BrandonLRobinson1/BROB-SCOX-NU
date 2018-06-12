import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUp from './src/views/getCredentials/SignUp';
import PhoneNumber from './src/views/getCredentials/PhoneNumber';
import SignUpEmail from './src/views/getCredentials/SignUpEmail';
import LogIn from './src/views/getCredentials/LogIn';
import GetCredentials from './src/views/getCredentials/GetCredentials';
import Validate from './src/views/getCredentials/Validate';
// import LogIn from './src/views/logIn/LogIn';

import CredentialsRouter from './src/views/getCredentials/index';

// unnest all log in screens
// conditionally render this page in sceens with a redux store that has defaults
// add tabs for the rest of the views
{/*initial needs to be set to if logged in is true for this and the tabs*/}

const RouterComponent = () => (
  <Router>
    <Scene key="root">
    
      <Scene
        key="getCredentials"
        component={GetCredentials}
        title="Please Login"
        hideNavBar
        initial
      />
      <Scene
        key="Email and Password"
        component={SignUpEmail}
        title="Create Account"
        backTitle=" "
      />
      <Scene
        key="SignUp"
        component={SignUp}
        title="Welcome to NU"
        backTitle=" "
        type="reset"
      />
      <Scene
        key="Phone Number"
        component={PhoneNumber}
        title="Phone Number"
        backTitle=" "
      />
      <Scene
        key="Validate"
        component={Validate}
        title="Validate"
        backTitle=" "
      />
      <Scene
        key="logIn"
        component={LogIn}
        title="Please Login"
        backTitle=" "
      />      
     
    </Scene> 
  </Router>
);

export default RouterComponent;

// <Scene
// key="credentials"
// component={CredentialsRouter}
// title="credentials"
// initial
// /> 

// <Scene key="main">
//         <Scene
//           key="employeeList"
//           component={EmployeeList}
//           title="Employees"
//           rightTitle="Add"
//           onRight={() => Actions.employeeCreate()}
//           initial
//         />
//         <Scene
//           key="employeeCreate"
//           component={EmployeeCreate}
//           title="Create Employee"
//         />
//       </Scene>

//     </Scene>