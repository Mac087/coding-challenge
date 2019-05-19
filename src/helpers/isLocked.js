function isLocked(map, tasks) {
  for (let task of tasks) {
    if (!task.dependencyIds.length) task.isLocked = false;
    else task.isLocked = !task.dependencyIds.every(id => tasks[map[id]].completedAt === true);
  }
}

export default isLocked;