import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'babel-polyfill';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchBar from './../components/layout/SearchBar';

import Header from './layout/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGenes: []
    };
  }

  componentDidMount = () => {
    axios
      .get('/api/find_all_genes')
      .then(result => {
        this.setState({
          allGenes: result.data.genes
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <SearchBar genes={this.state.allGenes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
