import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-project';
    printOrder: any

    restaurant = {
        name: "Eat Green Restaurant & Cafe",
        address: "Shop No- B-1345, Main Market, Sector-16 Noida, 201301",
        phone: 9999359827,
        email: "ashishs723gmail.com",
        GSTIN: "GHG1752627"
    }
    customerDetail = {
        name: "Sunil",
        verification: true,
        id: 11,
        email: "ashishs723@gmail.com",
        phone: "8828388182",
        bookingDatetime: Date.now()
    };
    tableDetail = { number: 2, seatCapacity: 4, occupancy: false, receipt: "rctb73386" }
    orders = [{
        orderNo: "Order 185",
        status: "Completed",
        paymentStatus: "Paid",
        totalQuantity: 5,
        totalamount: 525,
        gstAmount: 20,
        discount: 30,
        amountPayable: 515,
        orderDetails: [{
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 230,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 145
        }, {
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 30,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 225
        }, {
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 330,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 110
        }, {
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 20,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 109
        }, {
            name: "ATER MELON ROCKET & FIETA",
            unitPrice: 300,
            quantityOrdered: 2,
            amount: 500,
            tax: 5,
            taxAmount: 25,
            totalAmount: 525
        }]
    }, {

        orderNo: "Order 185",
        status: "Completed",
        paymentStatus: "Paid",
        totalQuantity: 5,
        totalamount: 525,
        gstAmount: 20,
        discount: 30,
        amountPayable: 515,
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
        orderNo: "Order 185",
        status: "Completed",
        paymentStatus: "Paid",
        totalQuantity: 5,
        totalamount: 525,
        gstAmount: 20,
        discount: 30,
        amountPayable: 515,
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
    print(printOrder): void {
        this.printOrder = printOrder
        setTimeout(() => {
            this.startPrint()
        }, 1000);
    }
    startPrint() {
        let popupWinindow
        let innerContents = document.getElementById("print-section").innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write(`<html><head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <style type="text/css">
        body {
            -webkit-print-color-adjust: exact;
            }
            .text-center{
                text-align:center !important;
            }
            .max-width-320px{
                max-width:320px !important;
            }
            .font-size-12px{
                font-size:12px !important;
            }
            p{
                margin: 0 !important;
            }
            .border-bottom-dotted{
                border-bottom: 1px dotted black !important;
            }
            .border-top-dotted{
                border-top: 1px dotted black !important;
            }
        </style>
        </head><body onload="window.print()"> ${innerContents} </html>`);
        popupWinindow.document.close();
    }
}

