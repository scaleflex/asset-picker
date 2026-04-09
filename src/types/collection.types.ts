export interface Collection {
  uuid: string;
  title: string;
  type: string;
  visibility: string;
  created_at: string;
  updated_at: string;
}

export interface CollectionFolder {
  name: string;
  path: string;
  filters: string;
  children: CollectionFolder[] | null;
}
