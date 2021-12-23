import './styles.css'

export const Button = ({ text, callFunction,disabled }) => {
  return <button disabled={disabled} onClick={callFunction}>{text}</button>;
};
