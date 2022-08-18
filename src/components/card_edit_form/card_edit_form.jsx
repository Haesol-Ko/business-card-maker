import React, {useRef} from 'react';
import styles from './card_edit_form.module.css';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({card, updateCard, deleteCard}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
    } = card;

    const onSubmit = () => {
        deleteCard(card);
    }

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
        <form ref={formRef} className={styles.form}>
            <input
                ref={nameRef}
                onChange={onChange}
                placeholder="name"
                className={styles.input}
                type="text"
                name="name"
                value={name} />
            <input
                ref={companyRef}
                onChange={onChange}
                placeholder="company"
                className={styles.input}
                type="text"
                name="company"
                value={company} />
            <select
                ref={themeRef}
                onChange={onChange}
                className={styles.select}
                name="theme"
                value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input
                ref={titleRef}
                onChange={onChange}
                placeholder="title"
                className={styles.input}
                type="text"
                name="title"
                value={title} />
            <input
                ref={emailRef}
                onChange={onChange}
                placeholder="email"
                className={styles.input}
                type="text"
                name="email"
                value={email} />
            <textarea
                ref={messageRef}
                onChange={onChange}
                placeholder="message"
                className={styles.textarea}
                name="message"
                value={message} />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
}

export default CardEditForm;