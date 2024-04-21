// import from "./comp1.scss"// 全局引入
// 模块化引入
import styles from "./comp1.module.css"// 全局引入
import { StepBackwardOutlined } from "@ant-design/icons";
import { Button } from "antd";
function Comp1() {
    return (
        <div className={styles.box}>
            <p>这是Comp1</p>
            <Button type="primary">Primary Button</Button>
            <StepBackwardOutlined style={{ fontSize: '400px' }} />
        </div>
    )
}

export default Comp1