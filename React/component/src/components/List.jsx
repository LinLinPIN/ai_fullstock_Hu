import PropTypes from 'prop-types'
const List = props => {
    const arr = props.colors
    return (
        <div>
            列表组件
            <ul>
                {
                    arr.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
        </div >
    );
};

List.propTypes = {
    colors: PropTypes.array,
    fn: PropTypes.func.isRequired,
    obj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number
    }).isRequired
}

export default List;