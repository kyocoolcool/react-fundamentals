import React from 'react'
import cmtItemObj from "@/css/cmtItem.css"

console.log(cmtItemObj);

export default function CmtItem(props) {
    return <div className={cmtItemObj.cmtBox}>
        <h1 className={cmtItemObj.title}>評論人:{props.user}</h1>
        <p className={cmtItemObj.content}>評論內容:{props.content}</p>
    </div>
}
