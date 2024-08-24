interface MultiSelectCheckboxProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (selectedOptions: string[]) => void;
}

const MultiSelectCheckbox = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: MultiSelectCheckboxProps) => {
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <div className="flex items-center mb-2" key={index}>
          <input
            type="checkbox"
            id={`checkbox${option}`}
            value={option}
            style={{ border: "2px solid #fff" }}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="w-4 h-4 rounded-sm border-2 border-gray-300 bg-transparent text-transparent focus:ring-transparent"
          />
          <label
            key={option}
            htmlFor={`checkbox${option}`}
            className="ms-2 text-sm"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultiSelectCheckbox;
