import { Http } from './http/http.service';
import { Storage } from './storage/storage.service';
import { Notification } from './notification/notification.service';

const storage = new Storage({
  storage: localStorage
});

const http = new Http({
  storage
});

const notification = new Notification();

export { http, storage, notification };
