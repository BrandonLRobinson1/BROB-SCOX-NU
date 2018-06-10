import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUp from './src/views/getCredentials/SignUp';
import PhoneNumber from './src/views/getCredentials/PhoneNumber';
import SignUpEmail from './src/views/getCredentials/SignUpEmail';
import GetCredentials from './src/views/getCredentials/GetCredentials';

import CredentialsRouter from './src/views/getCredentials/index';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>

    <Scene key="getCredentials">
      <Scene
        key="getCredentials"
        component={GetCredentials}
        title="Please Login"
        hideNavBar
        initial
      />
    {/*
    */}
      <Scene
        key="SignUp"
        component={SignUp}
        title="Welcome to NU"
      />
      <Scene
        key="Email and Password"
        component={SignUpEmail}
        title="Email and Password"
      />
      <Scene
        key="Phone Number"
        component={PhoneNumber}
        title="Phone Number"
      />
    </Scene>
     
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