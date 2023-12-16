const shiftData = {
  三原: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗',], availableDays: [1, 2, 3, 4, 5] },
  小寺淳: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車', 'サポート', '給水西', '給水東', 'ゴミ運転', '便洗9-11', '便洗13-15'], availableDays: [1, 2, 3, 4, 5] },
  高原: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  永岡: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  多田和: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  本田: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  藤村: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '1-3便洗', '5-7便洗', '15号車', '16号車'], availableDays: [1, 2, 3, 4, 5] },
  竹内和: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  清水: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  田村: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  山室: { shifts: ['1号車', '7号車', '11号車', '15号車', '16号車', '1-3便洗', '5-7便洗'], availableDays: [1, 2, 3, 4, 5] },
  // ... 他のメンバーと担当シフトの組み合わせ
  三原2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '1-3便洗', '5-7便洗', '15号車', '16号車'], availableDays: [2, 3, 5] },
  小寺淳2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  高原2: { shifts: ['11号車', '12号車', '13号車', '14号車', '1-3便洗', '5-7便洗', '15号車', '16号車'], availableDays: [1, 2, 3, 4, 5] },
  永岡2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  多田和2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  本田2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  藤村2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '1-3便洗', '5-7便洗', '15号車', '16号車'], availableDays: [1, 2, 3, 4, 5] },
  竹内和2: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  清水2: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  田村2: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  山室2: { shifts: ['1号車', '7号車', '11号車', '15号車', '16号車', '1-3便洗', '5-7便洗'], availableDays: [1, 2, 3, 4, 5] },

  永岡3: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  多田3: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗','ゴミ東','ゴミ西',], availableDays: [1, 2, 3, 4, 5] },
  本田3: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  藤村3: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '1-3便洗', '5-7便洗', '15号車', '16号車','ゴミ東','ゴミ西',], availableDays: [1, 2, 3, 4, 5] },
  竹内3: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  清水3: { shifts: ['現場長', '1班長', '2班長', '3班長', '4班長', '給水西', '給水東'], availableDays: [1, 2, 3, 4, 5] },
  田村3: { shifts: ['1号車', '2号車', '3号車', '4号車', '5号車', '6号車', '7号車','8号車','9号車','10号車','11号車','12号車','13号車','14号車','15号車', '16号車','1-3便洗', '5-7便洗','9-11便洗', '13-15便洗',], availableDays: [1, 2, 3, 4, 5] },
  山室3: { shifts: ['1号車', '7号車', '11号車', '15号車', '16号車', '1-3便洗', '5-7便洗'], availableDays: [1, 2, 3, 4, 5] },
};

function assignPeopleRandomly(shiftData, day) {
  const assignedShifts = {};
  const usedShifts = new Set();

  for (const member in shiftData) {
    const availableShifts = shiftData[member].shifts.filter(shift => shiftData[member].availableDays.includes(day) && !usedShifts.has(shift));

    if (availableShifts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableShifts.length);
      const randomShift = availableShifts[randomIndex];
      assignedShifts[member] = randomShift;
      usedShifts.add(randomShift);
    } else {
      // 出勤可能なシフトがない場合は何もしない
    }
  }

  return assignedShifts;
}

function generateResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const resultContainer = document.createElement('div');
  let result;

  const dayInput = document.getElementById('dayInput');

  if (dayInput) {
    const dayValue = dayInput.value;

    if (dayValue !== null) {
      const day = parseInt(dayValue);

      try {
        result = assignPeopleRandomly(shiftData, day);
      } catch (error) {
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        resultContainer.appendChild(errorElement);

        resultsDiv.appendChild(resultContainer);
        return;
      }
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = '日を入力してください';
      resultContainer.appendChild(errorElement);

      resultsDiv.appendChild(resultContainer);
      return;
    }
  } else {
    const errorElement = document.createElement('p');
    errorElement.textContent = '日を入力してください';
    resultContainer.appendChild(errorElement);

    resultsDiv.appendChild(resultContainer);
    return;
  }

  const resultElement = document.createElement('p');
  resultElement.textContent = '担当箇所: ';

  for (const member in result) {
    resultElement.textContent += `${member}が${result[member]} | `;
  }

  resultContainer.appendChild(resultElement);
  resultsDiv.appendChild(resultContainer);
  resultsDiv.appendChild(document.createElement('hr'));
}

document.getElementById('generateButton').addEventListener('click', generateResults);