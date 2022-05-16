import OrderModel from '../models/orders.models';
import connection from '../models/connection';

class OrderServices {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<object> {
    const order = await this.model.getAll();
    return order;
  }
}

export default OrderServices;