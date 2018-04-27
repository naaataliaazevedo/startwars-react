import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerPagination = styled.div`
  float: left;
  width: 100%;
`;

export class Pagination extends React.Component {

  constructor() {
    super();
    this.state = {
      pagination: [],
    };
  }

  componentDidMount() {
    const { data, page } = this.props;
      //console.log('page', data);
      /*fetch(data.next)
      .then(response => response.json())
      .then(data => {
        this.setState({ pagination: data });
      })
      .catch(error => {
        console.error(error);
      });*/
  }

  render() {
    const { data } = this.props;
    const { pagination } = this.state;

    return (
      <ContainerPagination>
        Pagination
        {/*<Link to="/">aaaaa</Link>*/}
      </ContainerPagination>
    );
  }
}

export default Pagination;