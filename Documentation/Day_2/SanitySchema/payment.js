export default {
    name: "payment",
    title: "Payment",
    type: "document",
    fields: [
      {
        name: "user",
        title: "User",
        type: "reference",
        to: [{ type: "user" }],
      },
      {
        name: "order",
        title: "Order",
        type: "reference",
        to: [{ type: "order" }],
      },
      {
        name: "transactionId",
        title: "Transaction ID",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "status",
        title: "Payment Status",
        type: "string",
        options: {
          list: ["Pending", "Completed", "Failed"],
        },
      },
      {
        name: "amount",
        title: "Amount Paid",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
      {
        name: "paymentMethod",
        title: "Payment Method",
        type: "string",
        options: {
          list: ["Credit Card", "PayPal", "Bank Transfer", "UPI"],
        },
      },
      {
        name: "paymentDate",
        title: "Payment Date",
        type: "datetime",
      }
    ],
  }
  