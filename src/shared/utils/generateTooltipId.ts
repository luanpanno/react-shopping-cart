export function generateTooltipId(id: string, name: string) {
  const idString = id?.substring(0, 5);
  const nameString = name?.substring(0, 10);

  return `${idString}-${nameString}-tooltip`;
}
