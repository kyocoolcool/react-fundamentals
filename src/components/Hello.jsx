// 第一種創建組件寫法
import React from "react";

export default function Hello(props) {
    console.log('name:' + props.name);
    console.log('age:' + props.age);
    console.log('like:' + props.like);
    //React接收的數據只能唯讀
    //必須返回合法的jsx虛擬DOM元素
    return <div>I like my dog {props.name}</div>
}

// export default Hello
