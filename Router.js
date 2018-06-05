import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import GetCredentials from './src/views/GetCredentials';

const RouterComponent = () => (
  <Router>
    <Scene key='root' hideNavBar>

      <Scene key="getCredentials" hideNavBar>
        <Scene
          key='getCredentials'
          component={GetCredentials}
          title="Please Login"
          initial
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