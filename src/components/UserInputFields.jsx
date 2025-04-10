import UserInput from "./UserInput";

export default function UserInputFields() {
  return (
    <div id="user-input">
      <form>
        <div class="input-group">
          <UserInput name="intialInvestment" label="Intial Investment" />
          <UserInput name="annualInvestment" label="Annual Investment" />
        </div>
        <div class="input-group">
          <UserInput name="expectedReturn" label="Expect Return" />
          <UserInput name="duration" label="Duration" />
        </div>
      </form>
    </div>
  );
}
