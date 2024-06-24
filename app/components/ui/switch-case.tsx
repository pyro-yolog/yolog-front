interface Props<T extends string | number> {
  caseBy: Partial<Record<T, JSX.Element | null>>;
  value: T;
  defaultComponent?: JSX.Element | null;
}

function SwitchCase<T extends string | number>({
  value,
  caseBy,
  defaultComponent: defaultComponent = null,
}: Props<T>) {
  if (value == null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
}

export default SwitchCase;
