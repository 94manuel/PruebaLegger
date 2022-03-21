import PropTypes  from 'prop-types';

const TableTr = props => {
  return (
    <>
      <tr>props.content</tr>
    </>
  );
}

Table.propTypes = {
  content: PropTypes.string,
};


export default TableTr;