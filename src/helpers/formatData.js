function formatData(arr) {
  const groups = {};

  arr.forEach(({ group, id, completedAt }) => {
    if (group in groups) groups[group].tasks++;
    else groups[group] = { name: group, tasks: 1, completed: 0 };
    if (completedAt) groups[group].completed++;
  });

  return [...Object.values(groups)];
}

export default formatData;