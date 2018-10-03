import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody  from './TableBody';

class Table extends Component {
    render() {
       
        const {characterData , removeCharacter}=this.props;

        return (
            <table class="table table-striped table-success" style={{width:'55%', color:'firebrick',fontFamily:'roboto'}}>
              <TableHeader/>
               <TableBody characterData={characterData} 
                removeCharacter={removeCharacter} 
               />
            </table>
        );
    }
}

export default Table;