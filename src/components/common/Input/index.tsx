interface PropType {
  title: string;
  name: string;
  type?: string;
  placeholder: string;
  onClick: () => void;
  onChange: () => void;
  value: string;
}

const Input = ({
  title,
  name,
  type,
  placeholder,
  onClick,
  onChange,
  value,
}: PropType) => {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
