import React from 'react';
import s from './SectionOneForm.module.css'

const SectionOneForm = () => {
    return (
        <div className={s.section_one__form}>
            <form className={s.form}>
                <input className={s.email} type="email" name="email" id="email" placeholder="Email:"/>
                <input className={s.password} type="password" name="password" id="password" placeholder="Password:"/>
                <button className={s.submit} id="submit" type="submit">Розпочати</button>
            </form>
        </div>
    );
}

export default SectionOneForm;