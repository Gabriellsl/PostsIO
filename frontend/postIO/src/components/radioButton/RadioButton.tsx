interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  classNames?: string;
}

function RadioButton({ value, checked, onChange, label, classNames }: RadioButtonProps) {
  return (
    <span className="flex items-center text-xs">
      <input
        data-testid={label}
        type="radio"
        name="category"
        value={value}
        className={`mr-2 ${classNames}`}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {label}
    </span>
  );
}

export default RadioButton;
