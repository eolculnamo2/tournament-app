const checkVars = (requiredVars: Array<any>) =>
  requiredVars.find((x: any) => Boolean(x) === false) === undefined;

const displayRequiredErrMsg = (dirty: boolean) => (val: any) => {
  const valueCheck: any = Array.isArray(val) ? val.length : val;
  return Boolean(dirty && !valueCheck);
};

const arrayHasNoValues = (val: Array<string>): boolean => {
  if (val.find((x: string) => x.trim().length > 0)) {
    return false;
  }
  return true;
};

export { arrayHasNoValues, checkVars, displayRequiredErrMsg };
