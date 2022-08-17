import React from 'react';
import styles from './editor.module.css';
import CardEditForm from "../card_edit_form/card_edit_form";

const Editor = ({cards}) => {
    console.log(cards)
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {cards.map(card => <CardEditForm card={card} />)}
            </ul>
        </section>
    );
}

export default Editor;