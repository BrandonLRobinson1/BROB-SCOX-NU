import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import SignUp from './src/views/getCredentials/SignUp';
import PhoneNumber from './src/views/getCredentials/PhoneNumber';
import SignUpEmail from './src/views/getCredentials/SignUpEmail';
import LogIn from './src/views/getCredentials/LogIn';
import GetCredentials from './src/views/getCredentials/GetCredentials';
import Validate from './src/views/getCredentials/Validate';

import Home from './src/views/tabs/Home';
import MapView from './src/views/tabs/MapView';

// import CredentialsRouter from './src/views/getCredentials/index';

import Icon from 'react-native-vector-icons/FontAwesome';

// conditionally render this page in sceens with a redux store that has defaults
const tabIcon = ({ focused, title }) => {
  // <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
  return (<Icon name="rocket" size={30} color="#900" />);
}

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      {/*
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
      */}
      <Scene
        key="Validate"
        component={Validate}
        title="Validate"
        backTitle=" "
      />
      {/*}
      <Scene
        key="logIn"
        component={LogIn}
        title="Please Login"
        backTitle=" "
      />   
    */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{backgroundColor: "blue"}}
        type="reset"
        hideNavBar
        pressOpacity={1}
        default="home"
      >
        <Scene key="home" title="HOME" icon={tabIcon} >
          <Scene
            key="homeTab"
            title="HomeTab"
            component={Home}
            backTitle=" "
            initial
          />
        </Scene>
        <Scene key="map" title="MAP" icon={tabIcon} >
          <Scene
            key="mapTab"
            title="MapTab"
            component={MapView}
            backTitle=" "
            initial
            hideNavBar
          />
        </Scene>

      </Scene>
     
    </Scene> 
  </Router>
);

export default RouterComponent;

// <Scene
// key="tabbar"
// tabs
// tabBarStyle={{backgroundColor: "fff"}}
// type="reset"
// >
//   <Scene
//     key="homeTab"
//     component={Home}
//     title="Home"
//     backTitle=" "
//     style={tabIcon}
//     initial
//   />
//   <Scene
//     key="mapTab"
//     component={MapView}
//     title="Map"
//     backTitle=" "
//     initial
//     style={tabIcon}            
//     hideNavBar
//   />

// </Scene>


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