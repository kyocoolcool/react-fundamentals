console.log("hello world");

import React from 'react' //創建組件，虛擬DOM元素，生命週期
import ReactDom from 'react-dom' //把創建好的組件、虛擬DOM元素喧染到頁面上展示

// 創建虛擬DOM
// 參數1: 創建的元素類型、字符串元素、表示元素的名稱
// 參數2: 是一個對象或null，表示刀前這個DOM元素的屬性
// 參數3: 子節點(包括其他虛擬DOM，獲取文本子節點)
// <h1 id="myh1">這是一格大大的h1</h1>
const myh1 = React.createElement('h1', {id: 'myh1', title: 'this is h1'}, '這是一個大大的H1');

const mydiv = React.createElement('div', null, '這是一個div元素', myh1);
// 使用ReactDOM把虛擬DOM渲染到頁面上
ReactDom.render(mydiv, document.getElementById('app'));
