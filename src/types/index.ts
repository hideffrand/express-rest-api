export type IUser = {
  username: string;
  password: string;
  email: string;
};

export interface IRenungan {
  id?: string;
  author: string;
  content: string;
  postedAt: string;
  updatedAt: string | null;
  title: string;
  series: string;
  verse: string;
}
