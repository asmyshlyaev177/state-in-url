export const fromJSON = (val: string) => {
  let result;

  try {
    result = JSON.parse(val);
    // eslint-disable-next-line no-empty
  } catch {}
  return result;
};

export const toJSON = (val: unknown) => {
  let result;

  try {
    result = JSON.stringify(val);
    // eslint-disable-next-line no-empty
  } catch {}

  return result || '';
};
