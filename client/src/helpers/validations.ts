const checkVars = (requiredVars: Array<any>) =>
  requiredVars.find((x: any) => Boolean(x) === false) === undefined;

const displayRequiredErrMsg = (dirty: boolean) => (val: any) => {
  const valueCheck: any = Array.isArray(val) ? val.length : val;

  return typeof val === 'number'
    ? Boolean(dirty && Object.is(val, NaN))
    : Boolean(dirty && !valueCheck);
};

const arrayHasNoValues = (val: Array<string>): boolean => {
  if (val.find((x: string) => x.trim().length > 0)) {
    return false;
  }
  return true;
};

const numberNotNegative = (n: number | null): boolean => n === null || n >= 0;

export {
  arrayHasNoValues,
  checkVars,
  displayRequiredErrMsg,
  numberNotNegative,
};
