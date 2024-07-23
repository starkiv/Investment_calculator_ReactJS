import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ userInputLog }) {
  const calculatedResult = calculateInvestmentResults(userInputLog);
  const innitialInvestment =
    calculatedResult[0].valueEndOfYear -
    calculatedResult[0].interest -
    calculatedResult[0].annualInvestment;

  return (
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
        {calculatedResult.map((yearData) => {
          const totaInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            innitialInvestment;
          const investedCapital = yearData.valueEndOfYear - totaInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totaInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
