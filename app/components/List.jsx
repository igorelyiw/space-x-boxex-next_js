import ListItem from "./ListItem";
import { getShipments } from "../service/shipments";

export async function List() {
  const data = await getShipments();
  return (
    <nav className="hidden md:block">
      <h3>Shipment list</h3>
      <ul className="h-full overflow-scroll w-[258px] mt-2">
        {data.map((item) => (
          <ListItem name={item.name} />
        ))}
      </ul>
    </nav>
  );
}
