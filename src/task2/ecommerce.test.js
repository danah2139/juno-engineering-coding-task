import { fetchOrderById } from "../api";
import { fetchAllOrders, bucketOrdersByUsers } from "./ecommerce";

const ORDER_ID = "70ef599e5eca171b2bce84d1";
test("Ecommerce - fetchOrderById", async () => {
  let orders = await fetchOrderById(ORDER_ID);
  expect(orders).toBeTruthy();
});

test("Ecommerce - fetchAllOrders", () => {
  let orders = fetchAllOrders();
  expect(orders).toBeTruthy();
});

test("Ecommerce - bucketOrdersByUsers", () => {
  let orders = bucketOrdersByUsers();
  expect(orders).toBeTruthy();
});
