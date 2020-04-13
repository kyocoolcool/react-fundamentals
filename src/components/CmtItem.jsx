import React from 'react'

//第一層封裝 將樣式對象和UI結構分離
const item = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'};
const user = {fontSize: '14px'};
const content = {fontSize: '12px'};

//第二層封裝 合併成一個大的樣式對象
// const styles = {
//     item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: {fontSize: '14px'},
//     content: {fontSize: '12px'}
// };

//第三層封裝 抽離為單獨樣式表模塊
import styles from "@/components/styles";

//使用構造函數創造無狀態組件
export default function CmtItem(props) {
    return <div style={styles.item}>
        <h1 style={styles.user}>評論人:{props.user}</h1>
        <p style={styles.content}>評論內容:{props.content}</p>
    </div>
}
