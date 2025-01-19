export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "customer",
        title: "Customer",
        type: "reference",
        to: [{ type: "customer" }],
        },
      {
        name: "products",
        title: "Ordered Products",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }],
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: ["Pending", "Processing", "Shipped", "Delivered"],
        },
      },
      {
        name: "totalPrice",
        title: "Total Price",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
      {
        name: "orderDate",
        title: "Order Date",
        type: "datetime",
      },
    ],
  };
  