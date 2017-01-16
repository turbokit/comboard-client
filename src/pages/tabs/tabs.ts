import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { FeedPage } from '../feed/feed';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public chatTab: Component = ChatPage;
  public feedTab: Component = FeedPage;
  public profileTab: Component = ProfilePage;

  constructor() {

  }
}
