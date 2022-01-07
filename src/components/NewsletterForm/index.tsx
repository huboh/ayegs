import './newsletter-form.scss';
import { FC } from "react";

import HorizontalForm from '../HorizontalForm';
import { ReactComponent as MailIcon } from './mail-icon.svg';

interface NewsletterProps {
  defaultEmail?: string;
  placeholder?: string;
  onSubscribe(email: string): void;
}

const NewsletterForm: FC<NewsletterProps> = ({ defaultEmail = '', onSubscribe, placeholder }) => {

  return (
    <div className="newsletter-promo">
      <h1 className="promo-header">join our newsletter</h1>
      <p className="promo-text">get 15% off your first purchase</p>
      <HorizontalForm
        icon={ <MailIcon /> }
        onSubmit={ onSubscribe }
        submitButtonText='subscribe'
        submitButtonTitle='subscribe'
        defaultValue={ defaultEmail }
        placeholder={ placeholder ?? 'email address' }
      />
    </div>
  );
};

export default NewsletterForm;