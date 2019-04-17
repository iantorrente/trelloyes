import React from 'react';
import ListClass from './List.js';
import './App.css';

class AppClass extends React.Component  {
  render() {
    const storeLists = this.props.store.lists;
    const lists = storeLists.map((list, i) => {
      return (
        <ListClass key={i} header={list.header} cards={list.cardIds}></ListClass>
      );
    });
    return (
      <main className='App'>
        <header className='App-header'>Trelloyes!</header>
        <div className='App-list'>
          {lists}
        </div>
      </main>
    );
  }
}

export default AppClass;