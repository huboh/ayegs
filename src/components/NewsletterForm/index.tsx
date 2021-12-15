import { FC, FormEvent, useState } from "react";

interface NewsletterProps {
  defaultEmail?: string;
  onSubscribe(email: string): void;
}

const NewsletterForm: FC<NewsletterProps> = ({ defaultEmail = '', onSubscribe }) => {
  const [email, setEmail] = useState(defaultEmail);
  const handleInput = ({ target }: FormEvent<HTMLInputElement> & { target: { value: string; }; }) => {
    setEmail(target.value);
  };

  return (
    <div className="newsletter-promo">
      <h1 className="promo-header">join our newsletter</h1>
      <p className="promo-text">get 15% off your first purchase</p>
      <form className="newsletter-form" onSubmit={ () => onSubscribe(email) }>
        <input type="email" name="" id="" onInput={ handleInput } />
      </form>
    </div>
  );
};

export default NewsletterForm;