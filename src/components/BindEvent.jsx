import React from "react";

// #region
//註解縮排的用法
// #endregion

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "HaHa",
            animal:"dog"
        }
    }

    render() {
        return <div>
            {/*三種方法寫法，最推薦最後一種箭頭函數寫法*/}
            {/*<button onClick={function () {console.log(2222);}}>按鈕</button>*/}
            {/*<button onClick={this.hello}>按鈕</button>*/}
            <button onClick={() => {
                this.show('🐷', '🦁')
            }}>按鈕
            </button>
            <div>{this.state.msg}</div>
        </div>
    }

    hello() {
        console.log('go!go!go!');
    }

    // show = (arhs1, args2) => console.log("luck" + arhs1 + args2);
    //注意在React中不要用此方式去變更status數值
    // show = (arhs1, args2) => this.state.msg="666666";
    //變更state值建議用此種方式
    //setState只會更改要變更的屬性
    show = (args1, args2) => this.setState({msg: args1 + args2},()=>console.log(this.state.msg));
    //setState為異布調用，若要獲取最新的值就在回調函數中取得
}
