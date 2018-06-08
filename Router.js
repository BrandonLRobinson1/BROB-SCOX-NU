import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUp from './src/views/SignUp';
import SignUpEmail from './src/views/SignUpEmail';
import GetCredentials from './src/views/GetCredentials';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>

      <Scene key="getCredentials" >
      {/*
        <Scene
          key="getCredentials"
          component={GetCredentials}
          title="Please Login"
          initial
          hideNavBar
        />
        <Scene
          key="SignUp"
          component={SignUp}
          title="Welcome to ---"
        />
      */}
        <Scene
          key="Email and Password"
          component={SignUpEmail}
          title="Email and Password"
        />
      </Scene>
     
      </Scene>
    
  </Router>
);

export default RouterComponent;

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