
const BrotherA = (props) => {

    const msg = '来自组件a的数据'
    const handler = () => {
        props.cb(msg)
    }
    return (
        <div>
            <h4 onClick={handler}>子组件A</h4>
        </div>
    );
};


export default BrotherA;