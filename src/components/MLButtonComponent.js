import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import './MLButtonComponent.css';

const NeuralNetworkComponent = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);
  const [model, setModel] = useState(null);

  // Функция для создания и обучения модели
  const createAndTrainModel = async () => {
    // Создаем модель
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Генерируем данные для обучения
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]); // Например, y = 2x - 1

    // Обучаем модель
    await model.fit(xs, ys, { epochs: 100 });

    setModel(model);
  };

  // Функция для предсказания
  const predict = async () => {
    if (model) {
      const inputTensor = tf.tensor2d([parseFloat(input)], [1, 1]);
      const prediction = model.predict(inputTensor);
      const outputValue = await prediction.data();
      setOutput(outputValue[0]);
    }
  };

  return (
    <div className='ML'>
      <h2>Нейронная сеть на React</h2>
      <button className='MLButton' onClick={createAndTrainModel}>Создать и обучить модель</button>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите число"
        />
        <button onClick={predict}>Предсказать</button>
      </div>
      {output !== null && <h2>Результат: {output}</h2>}
    </div>
  );
};

export default NeuralNetworkComponent;

/*

Объяснение кода
- Создание модели: Мы создаем простую полносвязную модель с одним входом и одним выходом.
- Обучение модели: Используем данные для обучения. В данном примере модель учится предсказывать значение по формуле \\(y = 2x - 1\\).
- Предсказание: После обучения вы можете ввести число и получить предсказанное значение.

*/