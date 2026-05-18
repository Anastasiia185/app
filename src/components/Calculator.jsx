import { useState, useEffect } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');

  useEffect(() => {
    if (height && weight && parseFloat(height) > 0 && parseFloat(weight) > 0) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) setDiagnosis('Недостатня вага');
      else if (bmiValue >= 18.5 && bmiValue < 25) setDiagnosis('Норма');
      else if (bmiValue >= 25 && bmiValue < 30) setDiagnosis('Надмірна вага');
      else if (bmiValue >= 30 && bmiValue < 35) setDiagnosis('Ожиріння I ступеня');
      else if (bmiValue >= 35 && bmiValue < 40) setDiagnosis('Ожиріння II ступеня');
      else setDiagnosis('Ожиріння III ступеня ⚠️');
    } else {
      setBmi(null);
      setDiagnosis('');
    }
  }, [height, weight]);

  return (
    <div className="bmi-container">
      <h2>Калькулятор Індексу Маси Тіла (ІМТ)</h2>
      
      <div className="bmi-inputs">
        <label>
          Зріст (см):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Наприклад, 175"
          />
        </label>
        
        <label>
          Вага (кг):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Наприклад, 70"
          />
        </label>
      </div>

      {bmi && (
        <div className="bmi-result">
          <p><strong>Ваш ІМТ:</strong> {bmi}</p>
          <p className={`diagnosis ${bmi >= 18.5 && bmi < 25 ? 'normal' : ''}`}>
            <strong>Діагноз:</strong> {diagnosis}
          </p>
        </div>
      )}
    </div>
  );
}