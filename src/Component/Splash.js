import React from 'react';
import Main from '../Component/Main_Screen';
import Home from '../Screens/Home';
import BottomNavBar from './BottomNavBar';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <Main />,
    };
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({component: <BottomNavBar />});
    }, 6000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return this.state.component;
  }
}