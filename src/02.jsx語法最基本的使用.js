import React from 'react'
import ReactDOM from 'react-dom'
/** 在JS文件中，默認不能寫HTML的標器，否則會打包失敗。
 在JS中，混入類似於HTML的語法，叫做JSX語法，符合XML規範的JS。
 可以使用babel來轉換這些JS中的標籤，
 JSX語法的本質還是在運行的時候被轉換成了React.createElement形式來執行。
*/
const myDiv = <div id="myDiv" title="i am div">this is div</div>;

ReactDOM.render(myDiv, document.getElementById('app'));
