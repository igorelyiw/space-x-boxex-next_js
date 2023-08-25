import { getCargoBaysCount } from "./helpers/utils";
import { getShipments } from "./service/shipments";

const MAX_WEIGHT = 10;

export default async function Home({ searchParams }) {
  const data = await getShipments();
  const selectedItem = data.find((item) => item.name === searchParams.q);
  if (!selectedItem || !selectedItem.boxes)
    return (
      <h4 className="text-center">
        No shipment was found or boxes are unavailable, try another search!
      </h4>
    );
  const cargoBaysCount = getCargoBaysCount(selectedItem.boxes, MAX_WEIGHT);
  return (
    <>
      <h1>{selectedItem.name}</h1>
      <p className="text-primary mt-3">{selectedItem.email}</p>
      <p className="text-primary mt-6 mb-3">Cargo Boxes</p>
      <input
        readOnly
        value={selectedItem.boxes}
        className="text-black p-4 rounded-2xl w-[320px]"
      />

      <h3 className="mt-6">Number of required cargo bays</h3>
      <h1>{cargoBaysCount}</h1>
    </>
  );
}
