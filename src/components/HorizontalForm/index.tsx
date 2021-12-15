import './horizontal-form.scss';
import { FC, useState, FormEvent, ReactNode, HTMLInputTypeAttribute } from "react";

interface HorizontalFormProps {
  inputType?: HTMLInputTypeAttribute;
  onSubmit(input: string): void;
  submitButtonText?: string;
  defaultValue?: string;
  placeholder?: string;
  inputName?: string;
  icon?: ReactNode;
};

const HorizontalForm: FC<HorizontalFormProps> = (props) => {
  const { defaultValue = '', placeholder, inputName, inputType = 'text' } = props;
  const [input, setInput] = useState(defaultValue);

  const handleInput = ({ target }: FormEvent<HTMLInputElement> & { target: { value: string; }; }) => {
    setInput(target.value);
  };

  return (
    <form className="horizontal-form" onSubmit={ (e) => { e.preventDefault(); input && props.onSubmit(input); } }>
      { props.icon ?? null }
      <input
        type={ inputType }
        name={ inputName }
        onChange={ handleInput }
        placeholder={ placeholder }
        className="input horizontal-form-input"
      />
      <button className='submit-button'>{ props.submitButtonText ?? 'submit' }</button>
    </form>
  );
};

export default HorizontalForm;