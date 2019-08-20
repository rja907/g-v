import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import Variants from './Variants';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allVariants: []
    };
  }

  UNSAFE_componentWillMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`/api/find_all_variants/?q=${this.state.value}`)
      .then(res => {
        this.setState({
          variants: res.data.variants
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  render() {
    if (this.props.genes && this.props.genes.length > 0) {
      const allGenes = this.props.genes;
      return (
        <div className="search-bar">
          <h2>Enter gene name</h2>
          <form onSubmit={this.handleSubmit}>
            <Autocomplete
              value={this.state.value}
              items={allGenes}
              getItemValue={item => item}
              renderMenu={children => <div className="menu">{children}</div>}
              shouldItemRender={(item, value) =>
                item.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              renderItem={item => <div key={item}>{item}</div>}
              onChange={event => {
                this.setState({ value: event.target.value });
              }}
              style={{ cursor: 'pointer' }}
              onSelect={value => {
                this.setState({ value });
              }}
            />

            <input
              type="submit"
              value="Check variants"
              className="btn btn-primary"
              id="form-input"
              style={{ cursor: 'pointer' }}
            />
          </form>
          <Variants variants={this.state.variants} />
        </div>
      );
    } else {
      return <h1>There are no variants for this gene.</h1>;
    }
  }
}

export default SearchBar;
