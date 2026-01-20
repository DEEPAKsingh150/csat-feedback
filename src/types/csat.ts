export interface CsatPayload {
  campaign_id: number;
  rating: number;
  feedback_option?: string;
  additional_comments?: string;
  tags?: string[];
  timestamp: string;
  source: 'android' | 'ios';
}
