import { Component } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent {

payement_testing: any = null;
  stripeAPIKey: any = 'pk_test_51MwSyoHH1ouxo7ZFUrk8k8lYlL8s7f0iZAyH7E7OMjMDMyqvK5nHcF1ZGx2b6NsLJzCC6bOJzA35xPr10vYMeuYl000xAZ6hiu';


  constructor() { }
  /*------------------------------------------

    ngOnInit() Function

    --------------------------------------------*/

  ngOnInit() {

    this.invokeStripe();

  }

  /*------------------------------------------

  makePayment() Function

  --------------------------------------------*/

  makePayment(montant: any) {

    // ici tu appel le terminal (de manière async)
    // tu attends le retour du terminal
    // si NOK !> renvoie une erreur
    // si OK (le mec a validé avec sa CB + son code) => code ci-dessous

    const payement_testing = (<any>window).StripeCheckout.configure({

      key: this.stripeAPIKey,

      locale: 'auto',

      token: function (stripeToken: any) {

        console.log(stripeToken);

        alert('Stripe fake paiemeent ok ');

      },

    });

    payement_testing.open({

      name: 'testpaiement.com',

      description: 'tous les champs sont obligatoires',

      montant: montant * 100,

    });
  }
  /*------------------------------------------

 invokeStripe() Function

 --------------------------------------------*/

  invokeStripe() {

    if (!window.document.getElementById('stripe-script')) {

      const script = window.document.createElement('script');

      script.id = 'stripe-script';

      script.type = 'text/javascript';

      script.src = 'https://checkout.stripe.com/checkout.js';

      script.onload = () => {

        this.payement_testing = (<any>window).StripeCheckout.configure({

          key: this.stripeAPIKey,

          locale: 'auto',

          token: function (stripeToken: any) {

            console.log(stripeToken);

            alert('Paiement reussie!');

          },

        });

      };

      window.document.body.appendChild(script);

    }

    }

    chosenObjet : any;
    Data: DataObj[] = [
      { id: 'un', name: 'test 1'},
      { id: 'deux', name: 'test 2'},
      { id: 'trois', name: 'test 3'},
      { id: 'quatre', name: 'test 4'},
      { id: 'cinq', name: 'test 5'}

      ]
  }
interface DataObj {
  id: string;
  name: string;
}
