// for future reference if required
export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
      },
      {
        name: 'shipperId',
        title: 'Shipper ID',
        type: 'string',
        description: 'Who is shipping (e.g., third-party shipper)',
      },
      {
        name: 'shipmentDate',
        title: 'Shipment Date',
        type: 'datetime',
      },
      {
        name: 'estimatedArrival',
        title: 'Estimated Arrival',
        type: 'datetime',
      },
      {
        name: 'actualArrival',
        title: 'Actual Arrival',
        type: 'datetime',
      },
      {
        name: 'shipmentStatus',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Delayed', value: 'delayed' },
          ],
        },
      },
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'deliveryAddress',
        title: 'Delivery Address',
        type: 'string',
      },
      {
        name: 'deliveryType',
        title: 'Delivery Type',
        type: 'string',
        options: {
          list: [
            { title: 'Standard', value: 'standard' },
            { title: 'Express', value: 'express' },
            { title: 'International', value: 'international' },
          ],
        },
      },
      {
        name: 'currentLocation',
        title: 'Current Location',
        type: 'string',
        description: 'Current location of the shipment',
      },
      {
        name: 'exceptions',
        title: 'Exceptions',
        type: 'text',
        description: 'Issues or delays during transit (e.g., weather, customs)',
      },
      {
        name: 'sla',
        title: 'SLA Reference',
        type: 'reference',
        to: [{ type: 'sla' }],
      },
    ],
  };
  