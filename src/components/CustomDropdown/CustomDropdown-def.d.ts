type SelectableOption = {
  label: string;
  value: string;
}

export interface CustomDropdownProps {
  label: string;
  options: SelectableOption[];
  selectedValues: SelectableOption[];
  onSelected: (value: SelectableOption) => void;
  showSelectionBadges?: boolean;
  disabled?: boolean;
}
