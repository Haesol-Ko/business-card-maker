import React from 'react';
import styles from './editor.module.css';
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({cards, addCard}) => {

    console.log(addCard);
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul className={styles.container}>
                {cards.map(card => <CardEditForm id={card.id} card={card}/>
                )}
            </ul>
            <CardAddForm onAdd={addCard} />
        </section>
    );
}

export default Editor;