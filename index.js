
const customers = [
  {
    name: "Customer A",
    id: 1,
    email: "customer_a@example.com",
    orders: [
      {
        orderId: 101,
        amount: 250.0,
        itemLines: [
          { itemId: 1001, quantity: 2 },
          { itemId: 1002, quantity: 1 },
        ],
      },
      {
        orderId: 102,
        amount: 150.0,
        itemLines: [
          { itemId: 1003, quantity: 1 },
        ],
      },
    ],
  },
  {
    name: "Customer B",
    id: 2,
    email: "customer_b@example.com",
    orders: [
      {
        orderId: 201,
        amount: 300.0,
        itemLines: [
          { itemId: 1003, quantity: 1 },
          { itemId: 2001, quantity: 2 },
        ],
      },
    ],
  },
];

const getMostExpensivePurchase = (customers, customerId) => {
    const customer = customers.find(selectedCustomer => selectedCustomer.id === customerId);
    if(!customer || !customer.orders.length) {
       return 'There are no customer orders with that ID number';
    };
    const mostExpensivePurchase = customer.orders.reduce((maxPurchase, order) =>  
        order.amount > maxPurchase.amount
            ? order
            : maxPurchase
        );
    return `${customer.name} most expensive purchase was ${mostExpensivePurchase.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}
const getAveragePurchaseAmount = (customers,customerId) => {
    const customer = customers.find(selectedCustomer => selectedCustomer.id === customerId);
    if(!customer || !customer.orders.length) {
        console.log('There are no customer orders with that ID number');
        return;
    };
    const totalPurchases = customer.orders.reduce((sum, order) =>
        sum + order.amount,0);
    const average =  totalPurchases/customer.orders.length;
    return `${customer.name} has an average purchase amount of ${average.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}

const getAverageItems = (customers) => {
    let totalOrders = 0;
    let totalItems = 0;

    customers.forEach(customer => {
        customer.orders?.forEach(order => {
            totalOrders++;
            totalItems += order.itemLines?.reduce((sum, item) => sum + item.quantity,0);
        })
    })
    const averageItemsPerOrder = totalOrders === 0
                                    ? 0
                                    : totalItems / totalOrders;
    return `The average items per order across all customers were ${Math.floor(averageItemsPerOrder)} items`;
}


// console.log(getMostExpensivePurchase(customers, 1));
console.log(getMostExpensivePurchase(customers, 3));
// console.log(getMostExpensivePurchase(customers, 2));
// console.log(getAveragePurchaseAmount(customers, 1));
// console.log(getAveragePurchaseAmount(customers, 2));
// console.log(getAverageItems(customers));

