import css from './ContactForm.module.css'

const ContactForm = ({
  handleFormSubmit
}) => {
  return (
    <div className={css.formAdd}>
        <form onSubmit={handleFormSubmit}>
          <h3 className={css.titleForm}>NAME</h3>
          <input type="text" name="name" required />
          <h3 className={css.titleForm}>Number</h3>
          <input type="tel" name="number" required />
        <button className={css.buttonAdd} type='submit'>Add contact</button>
          </form>
      </div>
    
  );
};

export { ContactForm };
       