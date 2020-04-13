import React from 'react'
import ReactDOM from 'react-dom'

// 第一種創建組件寫法
function Hello(props) {
    console.log('name:' + props.name);
    console.log('age:' + props.age);
    console.log('like:' + props.like);
    //React接收的數據只能唯讀
    //必須返回合法的jsx虛擬DOM元素
    return <div>I like my dog {props.name}</div>
}

const dog = {
    name: 'black',
    age: 20,
    like: 'food'
};

ReactDOM.render(<div>
    {/*傳遞數據的方式1*/}
    {/*<Hello name={dog.name} age={dog.age} like={dog.like}/>*/}
    {/*傳遞數據的方式2 展開運算符*/}
    <Hello {...dog}/>
</div>, document.getElementById('app'));

const o1 = {
    name: 'boss',
    age: '32',
    phone: '0912345'
};

// es6展開符使用
const o2 = {
    title: 'ceo',
    name:o1.name,
    age:o1.age,
    phone: o1.phone
};

const o3 = {
    title: 'manager',
    ...o1
};

console.log(o2);
console.log(o3);
