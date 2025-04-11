export function resolveVars(value: string | undefined | null, defaultValue: string): string;
export function resolveVars(value: string | undefined | null): string | null;
export function resolveVars(value: string | undefined | null, defaultValue?: string): string | null {
  if (value === undefined || value === null) {
    return defaultValue ?? null;
  }
  if (value.startsWith('--')) {
    return `var(${value}${defaultValue ? `, ${defaultValue}` : ''})`;
  }
  return value;
}
