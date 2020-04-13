import React from 'react'
import ReactDOM from 'react-dom'


class Movie extends React.Component{
    constructor() {
        super();
        this.state={
            msg: '由class創建的Movie組件'
        }
    }

    render() {
        // state可讀可寫
        this.state.msg = '真的可以修改';
        // 接收外部參數，this表示當前組件的實例對象
        return <div>Movie---{this.props.name}---{this.props.age}---{this.props.like}<div>{this.state.msg}</div></div>
    }
}

const dog = {
    name: 'black',
    age: 20,
    like: 'food'
};

ReactDOM.render(<div>
    123
    {/*<Movie name={dog.name} age={dog.age} like={dog.like}/>*/}
    {/*也可以寫成如下*/}
    <Movie {...dog}/>
</div>, document.getElementById('app'));


