interface RadioWithLabelProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}
const RadioWithLabel = ({
  label,
  name,
  checked,
  onChange,
}: RadioWithLabelProps) => {
  return (
    <label className="flex items-center justify-start w-[75px]">
      <input
        aria-labelledby="marketing-No"
        data-testid="marketing"
        className="radio-input"
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <div className="radio-label">
        <p>{label}</p>
      </div>
    </label>
  );
};

export default RadioWithLabel;
