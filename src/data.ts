export interface ResponseProps {
  status?: string;
  message?: string;
}

export enum ContentType {
  DEFAULT = 'default',
  DANGER = 'danger',
  LINE = 'line',
  CATEGORY = 'category',
}
