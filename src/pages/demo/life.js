import React from 'react';

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    // 等价于
    // state={
    //     count:0
    // }
    
    handleClick(){
        this.setState({
            count:this.state.count+2
        })
    }

    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(
            <div>   
                <button onClick={this.handleClick.bind(this)}>点击一下</button>
                {/* 函数调用并不指向组件的实例，因此要用bind绑定一下 */}
                <button onClick={this.handleAdd}>点击</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}