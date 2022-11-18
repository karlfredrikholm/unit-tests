export const firstLast = (items) => {
  if (items.length === 0) {
    return 'No items!'
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`
  } else {
    return `First: ${items.at(0)}, Last: ${items.at(-1)}`
  }
};