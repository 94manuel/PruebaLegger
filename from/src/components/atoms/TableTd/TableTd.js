import PropTypes  from 'prop-types';

const TableTd = props => {
  return (
    <>
      <td>props.content</td>
    </>
  );
}

Table.propTypes = {
  content: PropTypes.element,
};


export default TableTd;