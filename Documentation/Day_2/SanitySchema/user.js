export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "text",
      },
      {
        name: "orders",
        title: "Orders",
        type: "array",
        of: [{ type: "reference", to: [{ type: "order" }] }],
      },
    ],
  };
  