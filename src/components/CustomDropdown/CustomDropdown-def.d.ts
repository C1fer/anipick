export interface CustomDropdownProps {
  label: string;
  options: any[];
  selectedValues: any[];
  onSelected: (value: any) => void;
  showSelectionBadges?: boolean;
}