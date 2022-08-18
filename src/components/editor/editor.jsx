import React from 'react';
import styles from './editor.module.css';
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({cards, addCard, updateCard, deleteCard}) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul className={styles.container}>
                {Object.keys(cards).map(key =>
                    <CardEditForm
                        key={key}
                        card={cards[key]}
                        deleteCard={deleteCard}
                        updateCard={updateCard}
                    />
                )}
            </ul>
            <CardAddForm onAdd={addCard} />
        </section>
    );
}

export default Editor;