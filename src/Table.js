import React, { Component } from 'react';
/*
class Table extends Component{
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mudasir Hussain</td>
                        <td>Programmer</td>
                    </tr>
                    <tr>
                        <td>Iqrar Hussain</td>
                        <td>Businessman</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
*/

//Simple component
const TableHeader = () => {
    return (
        
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    )
}

const TableBody = (props) => {
    /*
    return (
        
        //1st part
        <tbody>
        <tr>
            <td>Mudasir Hussain</td>
            <td>Programmer</td>
        </tr>
        <tr>
            <td>Iqrar Hussain</td>
            <td>Businessman</td>
        </tr>
    </tbody>
    
    
    )*/
    
    //accessing props data
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=>props.removeCharacter(index)}>Delete</button>
                </td>

            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}
/*
//props
class Table extends Component{
    render() {
        const {characterData}=this.props
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}*/
//state with props
const Table = props => {
    const { characterData, removeCharacter } = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}
export default Table;