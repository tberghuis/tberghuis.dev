import ctl from "@netlify/classnames-template-literals";
import styles from "../styles/Test.module.css";

const h1Style = ctl(`
text-3xl 
font-bold 
underline
${styles.test}
`);

export default function Test() {
  return <h1 className={h1Style}>Hello world!</h1>;
}
