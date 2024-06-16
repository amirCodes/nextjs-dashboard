

export interface UserProfileType {
  id: string;
  email: string;
  phone: string | null;
  role: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  created_at: string;
  updated_at: string;
  confirmed_at: string;
  email_confirmed_at: string;
  last_sign_in_at: string;
  is_anonymous: boolean;
}
