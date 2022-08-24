import styles from './card_edit_form.module.css';
import Button from "../button/button";
import React, {memo} from "react";

const CardEditForm = memo(({FileInput, card, updateCard, deleteCard}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
    } = card;

    // file upload 할 때
    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }

    const onSubmit = () => {
        deleteCard(card);
    }

    // form 수정할 때
    const onChange = event => {
        if (event.currentTarget == null ) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
        [event.currentTarget.name]: event.currentTarget.value
        });
    }

    return (
        <form className={styles.form}>
            <input
                onChange={onChange}
                placeholder="name"
                className={styles.input}
                type="text"
                name="name"
                value={name} />
            <input
                onChange={onChange}
                placeholder="company"
                className={styles.input}
                type="text"
                name="company"
                value={company} />
            <select
                onChange={onChange}
                className={styles.select}
                name="theme"
                value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input
                onChange={onChange}
                placeholder="title"
                className={styles.input}
                type="text"
                name="title"
                value={title} />
            <input
                onChange={onChange}
                placeholder="email"
                className={styles.input}
                type="text"
                name="email"
                value={email} />
            <textarea
                onChange={onChange}
                placeholder="message"
                className={styles.textarea}
                name="message"
                value={message} />
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
});

export default CardEditForm;