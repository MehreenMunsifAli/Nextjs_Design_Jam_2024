import { type } from "os";

export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Food Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      // {
      //   name: "slug",
      //   title: "Slug",
      //   type: "slug",
      //   options: { source: "name", maxLength: 96 },
      //   validation: (Rule) => Rule.required(),
      // },
      {
        name: "description",
        title: "Description",
        type: "text",
        description: 'Short description of the food item',
      },
      {
        name: "price",
        title: "Current Price",
        type: "number",
        // validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: "category",
        title: "Category",
        // type: "reference",
        type: "string",
        description:
        'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
        // to: [{ type: "category" }],
      },
      {
        name: "available",
        title: "Available",
        type: "boolean",
        description: 'Availability status of the food item',
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: new Date().toISOString(),
      },
    ],
  };
  
