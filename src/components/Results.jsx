import { formatter } from "../util/investment";
const format = formatter.format;

export default function Results({ resultList }) {
  let totalInterest = 0;
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {resultList.map((result) => {
            totalInterest += result.interest;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{format(result.valueEndOfYear)}</td>
                <td>{format(result.interest)}</td>
                <td>{format(totalInterest)}</td>
                <td>{format(result.annualInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
