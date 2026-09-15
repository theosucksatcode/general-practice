function getAverage(studentScores) {
  if (Array.isArray(studentScores) && studentScores.length > 0) {
    const totalStudents = studentScores.length;
    const scoresTotal = studentScores.reduce((accumulator, currScore) => {
      return accumulator + currScore;
    }, 0);

    return Math.round(scoresTotal / totalStudents);
  }

  return "-";
}

function getHighestScore(studentScores) {
  if (Array.isArray(studentScores) && studentScores.length > 0) {
    return Math.max(...studentScores);
  }

  return "-";
}

(function () {
  const groupScores = [
    [43, 78, 34, 91, 67, 71, 75, 84, 97, 58],
    [100, 82, 76, 63, 90, 55],
    [72],
    [60, 60, 60, 60],
    [],
  ];

  groupScores.forEach((group, groupIdx) => {
    console.log(`Group ${groupIdx + 1} averaged ${getAverage(group)}`);
    console.log(
      `Group ${groupIdx + 1}'s highest score was ${getHighestScore(group)}`,
    );
    console.log(""); // new line
  });
})();
