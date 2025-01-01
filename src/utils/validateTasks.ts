const validateTasks = (data: unknown) => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every(
    item =>
      typeof item.id === 'number' &&
      typeof item.name === 'string' &&
      typeof item.status === 'string' &&
      typeof item.createdAt === 'string'
  );
};

export default validateTasks;
