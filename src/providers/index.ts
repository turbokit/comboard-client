import { AuthService } from './auth-service';
import { BarterService } from './barter-service';
import { ChatService } from './chat-service';
import { ProfileService } from './profile-service';
import { SettingsService } from './settings-service';

export const Providers: Array<any> = [
  AuthService,
  BarterService,
  ChatService,
  ProfileService,
  SettingsService
];

export * from './auth-service';
export * from './barter-service';
export * from './chat-service';
export * from './profile-service';
export * from './settings-service';
