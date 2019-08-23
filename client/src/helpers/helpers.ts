const removeBlankValues = (arr: Array<string>): Array<string> => {
  return arr.filter((x: string) => x.trim().length > 0);
};

export { removeBlankValues };
