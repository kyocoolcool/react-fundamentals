import React from 'react'
import ReactDOM from 'react-dom'

let a = 10;
let str = 'Hello,React';
let boo = true;
let title = "I'm title";
let h1 = <h1>床前明月光</h1>;
const arr = [
    <h2 key={1}>this is h2</h2>,
    <h3 key={2}>this is h3</h3>
];
// 遍歷array 方案1
const strArr = ['將', '士', '象', '車', '馬', '包', '兵'];
const nameArr = [];
strArr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp);
});

// 遍歷array 方案2 使用map循環返回

ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo ? '真真' : '假假'}
    <hr/>
    <p title={title}>this is p tag</p>
    <hr/>
    {h1}
    <hr/>
    {arr}
    <hr/>
    {nameArr}
    <hr/>
    {strArr.map(item => <h5 key={item}>{'@' + item}</h5>)}
    <hr/>
    {/*這是註釋*/}
    {
        //這也是註釋
    }
    <p className="myClass">!!!!!!</p>
    <hr/>
    <label htmlFor="female">111111</label>
    <input type="radio" name="sex" id="female" />
</div>, document.getElementById('app'));
