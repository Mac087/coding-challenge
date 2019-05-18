function formatData(arr) {
  const obj = {};

  for (let task of arr) {
    const { group, id, completedAt } = task;

    if (group in obj) {
      obj[group].tasks.push(task);
      obj[group].map[task.id] = obj[task.group].tasks.length - 1;
      if (completedAt) obj[group].completed++;

    } else {
      obj[group] = {};
      obj[group].tasks = [task];
      obj[group].map = {
        [id]: 0
      };
      obj[group].completed = task.completedAt === null ? 0 : 1;
    }
  }

  const groups = [];
  for (let key in obj) {
    const { tasks, completed, map } = obj[key];
    groups.push({ name: key, tasks, completed, map });
  }

  return groups;

}

export default formatData;