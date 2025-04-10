import * as util from "../util/investment";
const format = util.formatter.format;

export default function Results() {
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
          <tr>
            <td>1</td>
            <td>{format(11800)}</td>
            <td>{format(600)}</td>
            <td>{format(600)}</td>
            <td>{format(11200)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
