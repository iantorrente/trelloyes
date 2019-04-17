import React from 'react';
import CardClass from './Card.js'
import STORE from './store.js';
import './List.css';

class ListClass extends React.Component {
  render() {
    console.log(this.props);
    console.log(STORE.allCards);
    const allCards = STORE.allCards;
    const storeArray = this.props.cards;
    const cards = storeArray.map((cards) => {
      console.log(STORE.allCards[cards]);
      return (
        <CardClass title={allCards[cards].title} content={allCards[cards].content}></CardClass>
      );
    });
    return (
      <section className='List'>
        <header className='List-header'>{this.props.header}</header>
        <div className='List-cards'>
          {cards}
        </div>
      </section>
    );
  }
}

export default ListClass;