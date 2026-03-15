export interface Tag {
  uuid: string;
  sid: string;
  slug: string;
  names: Record<string, string>;
  primary: boolean;
  created_at: string;
  updated_at: string | null;
}

export interface TagWithLabel extends Tag {
  label: string;
}
