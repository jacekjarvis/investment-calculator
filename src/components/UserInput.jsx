export default function UserInput({ name, label, data, onChange }) {
  let value = data[name];

  function handleInputChange(event) {
    let dataCopy = { ...data };
    dataCopy[name] = +event.target.value;
    onChange(dataCopy);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        onChange={handleInputChange}
        value={value}
        required
      />
    </div>
  );
}
