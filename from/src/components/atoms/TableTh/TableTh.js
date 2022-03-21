import PropTypes  from 'prop-types';

const TableTh = props => {
  return (
    <>
      <td>props.content</td>
    </>
  );
}

Table.propTypes = {
  content: PropTypes.element,
};


export default TableTh;