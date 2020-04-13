import React from 'react'
import ReactDOM from 'react-dom'
import Hello from "@/components/Hello";

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
