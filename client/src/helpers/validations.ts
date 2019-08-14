const checkVars = (requiredVars: Array<any>) =>
  requiredVars.find((x: any) => Boolean(x) === false) === undefined;
const displayErrMsg = (dirty: boolean) => (val: any) => Boolean(dirty && !val);

export { checkVars, displayErrMsg };
