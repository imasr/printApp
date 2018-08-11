import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-project';
    customerDetail = { name: "Sunil", verification: true, id: 11 };
    tableDetail = { number: 2, seatCapacity: 4, occupancy: false }
    orders = [{
        orderNo: "Order 185",
        status: "Completed",
        paymentStatus: "Paid",
        amountPayable: 525,
        orderDetails: [{
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 300,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 525
        }]
    }, {

        orderNo: "Order 186",
        status: "Completed",
        paymentStatus: "Paid",
        amountPayable: 525,
        orderDetails: [{
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 300,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 525
        }]
    }, {
        orderNo: "Order 187",
        status: "Completed",
        paymentStatus: "Paid",
        amountPayable: 525,
        orderDetails: [{
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 300,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 525
        }]
    }]
    print(): void {
        let popupWinindow
        let innerContents = document.getElementById("print-section").innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write(`<html><head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <style type="text/css">
        body {
            -webkit-print-color-adjust: exact;
            }
            .font-size-14px{
                font-size:14px
            }
            .cursor-pointer{
                cursor: pointer;
            }
        </style>
        </head><body onload="window.print()"> ${innerContents} </html>`);
        popupWinindow.document.close();
    }
}

