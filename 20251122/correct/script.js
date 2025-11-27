document.getElementById('calculateButton').addEventListener('click', () => {
    const dateInputValue = document.getElementById('dateInput').value;
    if (dateInputValue) {
        const result = getNextMonthDate(new Date(dateInputValue));
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = '日付を選択してください。';
    }
});

/**
 * 指定された日付の翌月のyyyy-mm-dd形式の文字列を返します。
 * @param {Date} date - 基準となる日付。
 * @returns {string} yyyy-mm-dd形式の文字列。
 */
function getNextMonthDate(date) {
    const nextMonthDate = new Date(date);
    nextMonthDate.setMonth(date.getMonth() + 1);

    const year = nextMonthDate.getFullYear();
    const month = (nextMonthDate.getMonth() + 1).toString().padStart(2, '0');
    const day = nextMonthDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// Node.js環境でのエクスポート
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = getNextMonthDate;
}
