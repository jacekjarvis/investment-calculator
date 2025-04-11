import { formatter } from "../util/investment";
const format = formatter.format;

export default function Results({ resultList }) {
  let totalInterest = 0;
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultList.map((result) => {
            totalInterest += result.interest;
            const totalAmountInvested = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{format(result.valueEndOfYear)}</td>
                <td>{format(result.interest)}</td>
                <td>{format(totalInterest)}</td>
                <td>{format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
