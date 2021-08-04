export type Player = {
  id?: string;
  name?: string;
};

export type Payload = {
  status?: string;
  online?: boolean;
  error?: string;
  motd?: string;
  favicon?: string;
  version?: string;
  game_type?: string;
  game_id?: any;
  server_mod?: string;
  map?: any;
  players?: {
    max?: number;
    now?: number;
    list?: string[];
    sample?: Player[];
  };
  plugins?: any[];
  last_online?: string;
  last_updated?: string;
  duration?: number;
};
