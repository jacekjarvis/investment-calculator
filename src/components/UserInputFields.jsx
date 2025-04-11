import UserInput from "./UserInput";

export default function UserInputFields({ data, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          name="initialInvestment"
          label="Initial Investment"
          onChange={onChangeInput}
          data={data}
        />
        <UserInput
          name="annualInvestment"
          label="Annual Investment"
          onChange={onChangeInput}
          data={data}
        />
      </div>
      <br />
      <div className="input-group">
        <UserInput
          name="expectedReturn"
          label="Expect Return"
          onChange={onChangeInput}
          data={data}
        />
        <UserInput
          name="duration"
          label="Duration"
          onChange={onChangeInput}
          data={data}
        />
      </div>
    </section>
  );
}
