const INPUT_TYPES = [
  "INITIAL INVESTMENT",
  "ANNUAL INVESTMENT",
  "EXPECTED RETURN",
  "DURATION",
];

export default function UserInput({ onChageInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>{INPUT_TYPES[0]}</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChageInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>{INPUT_TYPES[1]}</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChageInput("annualInvstment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>{INPUT_TYPES[2]}</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChageInput("expectredReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>{INPUT_TYPES[3]}</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChageInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
