

// function to truncate text
const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
};

export {
  truncateText
};
