export default interface IProps {
  Id?: number;
  image_url?: string;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
  shipping_date?: string;
  title?: string;
  claimed?: boolean | null;
  used?: boolean | null;
  shipped?: boolean | null;
  code: string;
}
