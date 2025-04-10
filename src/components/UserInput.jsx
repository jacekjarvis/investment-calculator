export default function UserInput({ initialInvestment, label }) {
  return (
    <div>
      <label for={initialInvestment}>{label}</label>
      <input type="number" id={initialInvestment} name={initialInvestment} />
    </div>
  );
}
