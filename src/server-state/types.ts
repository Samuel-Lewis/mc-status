export type Player = {
  id?: string;
  name?: string;
};

export type Payload = {
  duration?: number;
  error?: string;
  favicon?: string;
  game_id?: any;
  game_type?: string;
  last_online?: string;
  last_updated?: string;
  map?: any;
  motd?: string;
  online?: boolean;
  players?: {
    list?: string[];
    max?: number;
    now?: number;
    sample?: Player[];
  };
  plugins?: any[];
  server_mod?: string;
  server?: {
    name?: string;
    protocol?: number;
  };
  status?: string;
};
