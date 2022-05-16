import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    // Busca lista de orders
    const orders = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [orderRows] = orders;
    
    // Monta objeto inicial, sem os productsIds
    const allOrders: Array<IOrder> = Object.values(orderRows).map((order) => (
      { id: order.id, userId: order.userId, productsIds: [] }
    ));
    
    // Busca lista de produtos
    const products = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [productRows] = products;
    
    // Popula allOrders com os ids dos produtos
    Object.values(productRows).forEach((product) => {
      Object.values(orderRows).forEach((order, index) => {
        if (order.id === product.orderId) {
          allOrders[index].productsIds.push(product.id);
        }
      });
    });

    return allOrders as IOrder[];
  }
}

export default OrderModel;