// function Hello(){}
// const Hello = function(){}
// const Hello = () => {}
// export default Hello;
// export default function Hello(){}

import World from "./World";
import styles from "./Hello.module.css"

export default function Hello() {
    return (
    <div>
        <h1 style={
            {
                color : 'red',
                borderRight : '2px solid #000',
                marginBottom : "50px",
                opacity: 1,
            }
        }>Hello</h1>
        <div className={styles.box}> Hello </div>
        <World />
    </div>
    );
}
