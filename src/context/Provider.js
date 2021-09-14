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
  //   }
  //   this.moveCar = this.moveCar.bind(this);
  // }

  const [state, setState] = useState({
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    },
  });

  const moveCar = (car, side) => {
    setState({
      cars: {
        ...state.cars,
        [car]: side,
      },
    });
    // this.setState({
    //   cars: {
    //     ...this.state.cars,
    //     [car]: side,
    //   },
    // });
  };

  const context = {
    ...state,
    moveCar: moveCar,
  };

  // const { children } = this.props;

  return (
    <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
