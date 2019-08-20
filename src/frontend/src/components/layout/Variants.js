import React, { Component } from 'react';
import ReactTable from 'react-table';

class Variants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {
        Header: 'Gene',
        accessor: 'gene'
      },
      {
        Header: 'Nucleotide Change',
        accessor: 'nucleotide_change'
      },
      {
        Header: 'Protein Change',
        accessor: 'protein_change'
      },
      {
        Header: 'Other Mappings',
        accessor: 'other_mappings'
      },
      {
        Header: 'Alias',
        accessor: 'alias'
      },
      {
        Header: 'Transcripts',
        accessor: 'transcripts'
      },
      {
        Header: 'Region',
        accessor: 'region'
      },
      {
        Header: 'Reported Classification',
        accessor: 'reported_classification'
      },
      {
        Header: 'Inferred Classification',
        accessor: 'inferred_classification'
      },
      {
        Header: 'Source',
        accessor: 'source'
      },
      {
        Header: 'Last Evaluated',
        accessor: 'last_evaluated'
      },
      {
        Header: 'Last Updated',
        accessor: 'last_updated'
      },
      {
        Header: 'More Information',
        accessor: 'url',
        Cell: e => (
          <a target="_blank" href={e.value}>
            Link
          </a>
        )
      },
      {
        Header: 'Submitter Comment',
        accessor: 'submitter_comment'
      }
    ];
    if (this.props.variants && this.props.variants.length > 0) {
      return (
        <div>
          <h2>
            {' '}
            There are {this.props.variants.length} variants of this gene!
          </h2>
          <div>
            <ReactTable
              data={this.props.variants}
              style={{ height: '80vh' }}
              columns={columns}
              defaultPageSize={5}
              pageSizeOptions={[5, 10, 20, 50]}
              minRows={0}
            />
          </div>
        </div>
      );
    } else {
      return [];
    }
  }
}

export default Variants;
