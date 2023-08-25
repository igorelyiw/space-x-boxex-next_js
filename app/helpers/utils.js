export const getCargoBaysCount = (shipment, maxWeight) => {
  const cargoUnits = shipment.split(",").map((unit) => parseFloat(unit));
  const resultArray = [];

  for (const unit of cargoUnits) {
    let allocated = false;

    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] + unit <= maxWeight) {
        resultArray[i] += unit;
        allocated = true;
        break;
      }
    }

    if (!allocated) {
      resultArray.push(unit);
    }
  }

  return resultArray.length;
};
