export type Country = {
  id: number;
  name: string;
  countryCode: string;
  flag: string | null;
  parentAreaId: number;
  parentArea: string;
};
