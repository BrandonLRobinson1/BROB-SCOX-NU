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

import CredentialsRouter from './src/views/getCredentials/index';

// unnest all log in screens
// conditionally render this page in sceens with a redux store that has defaults
// add tabs for the rest of the views
{/*initial needs to be set to if logged in is true for this and the tabs*/}


// would actually render icons if i had them
// const tabIcon = () => {
// // const tabIcon = ({ selected, title }) => {
//   // var args = Array.from(arguments);
//   // var args = [...arguments];
//   // console.log('args', selected, title, arguments.length, args)
//   console.log('args', this)
//   // return (<Text style={{ color: selected ? 'red' : 'black'}}>{title}</Text>);
//   // return (<Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>);
//   return null
// }

// class tabIcon extends React.Component {
//   render(){
//       console.log('props', this.props)
//       return (
//           <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
//       );
//   }
// }

// const tabIcon = () => {
const tabIcon = ({ focused, title }) => {
  // var args = Array.from(arguments);
  // var args = [...arguments];
  // console.log('args', selected, title, arguments.length, args)
  console.log('args', this)
  return (<Text style={{ color: focused ? 'red' : 'black'}}>{title}</Text>);
  // return (<Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>);
  return null
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