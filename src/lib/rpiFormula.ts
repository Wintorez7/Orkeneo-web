export function calculateDetailedLoss(data: {
  revenue: number;
  foodPct: number;  
  staffPct: number;
  consistency: number;
}) {
 
  const foodLossPct = data.foodPct * 0.1;   
  const staffLossPct = data.staffPct * 0.10; 
  

  const demandFactor =
    data.consistency < 33
      ? 0.01
      : data.consistency < 66
      ? 0.02
      : 0.03;

  const food = data.revenue * (foodLossPct / 100);
  const staff = data.revenue * (staffLossPct / 100);
  const demand = data.revenue * demandFactor;

  const total = food + staff + demand;

  const recoverMin = total * 0.6;
  const recoverMax = total * 0.8;

  return {
    food,
    staff,
    demand,
    total,
    recoverMin,
    recoverMax,
  };
}