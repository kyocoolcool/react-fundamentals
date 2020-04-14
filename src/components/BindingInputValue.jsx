import React from "react";


export default class BindingInputValue extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "HaHa",
            animal: "dog"
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
            {/*如果只是把文本框value屬性綁定到state狀態，如果不設定onChange()函數的話，就只是readOnly文本框*/}
            {/*<input type="text" style={{width:'200px'}} value={this.state.msg} readOnly/>*/}
            <input type="text" style={{width:'200px'}} value={this.state.msg} onChange={(e)=>this.change(e)} ref={"txt"}/>
        </div>
    }

    //2種方法取得輸入的值

    change = (e) => {
        this.setState({
            // 方案1傳入event對象
            // msg: e.target.value
            //方案2透過refs參考對象
            msg: this.refs.txt.value
        })


    };

    hello() {
        console.log('go!go!go!');
    }

    // show = (arhs1, args2) => console.log("luck" + arhs1 + args2);
    //注意在React中不要用此方式去變更status數值
    // show = (arhs1, args2) => this.state.msg="666666";
    //變更state值建議用此種方式
    //setState只會更改要變更的屬性
    show = (args1, args2) => this.setState({msg: args1 + args2}, () => console.log(this.state.msg));
    //setState為異布調用，若要獲取最新的值就在回調函數中取得
}
