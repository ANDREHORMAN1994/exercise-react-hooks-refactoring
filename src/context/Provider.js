// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: {
  //       red: false,
  //       blue: false,
  //       yellow: false,
  //     },
  //     signal: {
  //       color: 'red',
  //     },
  //   }
  //   this.moveCar = this.moveCar.bind(this);
  //   this.changeSignal = this.changeSignal.bind(this);
  // }
  const [ state, setState ] = useState({
        cars: {
          redCar: false,
          blueCar: false,
          yellowCar: false,
        },
        signal: {
          color: 'red',
        },
      })

  const moveCar = (car, side) => {
    // this.setState({
    //   cars: {
    //     ...this.state.cars,
    //     [car]: side,
    //   },
    // });
    setState({
      ...state,
      cars: {
        ...state.cars,
        [car]: side
      }
    })
  };

  const changeSignal = (signalColor) => {
    // this.setState({
    //   signal: {
    //     ...this.state.signal,
    //     color: signalColor,
    //   },
    // });
    setState({
      ...state,
      signal: {
        color: signalColor,
      }
    })
  };

  const context = {
    ...state,
    moveCar: moveCar,
    changeSignal: changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
