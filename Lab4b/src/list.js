import React, { Component } from 'react';

class List extends Component {
 
    createElement(item){
        return(<option key={item.key}>{item.text}</option>)
    }
   
    render(){
        var todoEntries = this.props.text;
        var listItem = todoEntries.map(this.createElement)

        return (
            <select className= "list">
            {listItem}
            </select>
        )
    }

}
export default List;
