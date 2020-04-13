import React from "react";
import CmtItem from "@/components/CmtItem2";
//直接導入css樣式表，默認全局生效
import cmtCssObj from "@/css/cmtList.css"

console.log(cmtCssObj);

export default class CommentsList extends React.Component {
    constructor() {
        super();
        this.state = {
            commentsList: [
                {id: '1', user: 'Chris', content: 'nice post 1'},
                {id: '2', user: 'Jack', content: 'nice post 2'},
                {id: '3', user: 'Nick', content: 'nice post 3'},
                {id: '4', user: 'Sky', content: 'nice post 4'},
                {id: '5', user: 'Happy', content: 'nice post 5'}
            ]
        }
    }

    render() {
        return <div>
            {/*<h1 className={cmtCssObj.title + " .test"}>這是評論表組件</h1>*/}
            <h1 className={[cmtCssObj.title, 'test'].join(' ')}>這是評論表組件</h1>
            {this.state.commentsList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }
}
