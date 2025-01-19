export default {
    name: 'sla',
    title: 'Service Level Agreement (SLA)',
    type: 'document',
    fields: [
      {
        name: 'serviceType',
        title: 'Service Type',
        type: 'string',
        description: 'Type of service covered under the SLA (e.g., delivery, support)',
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'datetime',
      },
      {
        name: 'targetResponseTime',
        title: 'Target Response Time',
        type: 'string',
        description: 'Agreed response time for service requests (e.g., 1 hours)',
      },
      {
        name: 'targetResolutionTime',
        title: 'Target Resolution Time',
        type: 'string',
        description: 'Agreed resolution time for issues (e.g., 24 hours)',
      },
      {
        name: 'penalties',
        title: 'Penalties',
        type: 'string',
        description: 'Penalties for failing to meet SLA terms',
      },
      {
        name: 'priorityLevel',
        title: 'Priority Level',
        type: 'string',
        options: {
          list: [
            { title: 'High', value: 'high' },
            { title: 'Medium', value: 'medium' },
            { title: 'Low', value: 'low' },
          ],
        },
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Active', value: 'active' },
            { title: 'Expired', value: 'expired' },
            { title: 'Breached', value: 'breached' },
          ],
        },
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }], // Assuming you have a 'customer' schema
      },
    ],
  };
  