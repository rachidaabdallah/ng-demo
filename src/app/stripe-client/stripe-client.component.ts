import { Component } from '@angular/core';
import {loadStripeTerminal} from '@stripe/terminal-js/pure';

@Component({
  selector: 'app-stripe-client',
  templateUrl: './stripe-client.component.html',
  styleUrls: ['./stripe-client.component.css']
})
export class StripeClientComponent {

  constructor() {
  }

  const StripeTerminal = await loadStripeTerminal();

  unexpectedDisconnect() {
    // In this function, your app should notify the user that the reader disconnected.
    // You can also include a way to attempt to reconnect to a reader.
    console.log("Disconnected from reader")
  }

  fetchConnectionToken() {
    // Do not cache or hardcode the ConnectionToken. The SDK manages the ConnectionToken's lifecycle.
    return fetch('/connection_token', { method: "POST" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.secret;
      });
  }




}


