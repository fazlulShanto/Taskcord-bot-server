export interface DiscordUserResponse {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: any;
  accent_color: any;
  global_name: string;
  avatar_decoration_data: {
    asset: string;
    sku_id: string;
    expires_at: any;
  };
  banner_color: any;
  clan: any;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
  email: string;
  verified: boolean;
}

export interface UserGuildList {
  id: string;
  name: string;
  icon: string;
  banner: any;
  owner: boolean;
  permissions: string;
  features: string[];
}
export interface DiscordExchangeCodeResponse {
  token_type: "Bearer";
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
export interface DiscordUserInfoResponse {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string | null;
  accent_color: string | null;
  global_name: string;
  avatar_decoration_data: {
    asset: string;
    sku_id: string;
    expires_at: number | null;
  };
  banner_color: string | null;
  clan: string | null;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
  email: string;
  verified: boolean;
}

export type DiscordServerListResponse = {
  id: string;
  name: string;
  icon: string;
  banner: string;
  owner: boolean;
  permissions: string;
  features: string[];
}[];
