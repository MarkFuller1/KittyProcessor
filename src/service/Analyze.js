

export const numberLine = (timestamps) => {

  const parsed = [];

  timestamps.forEach(stamp=> {

    parsed.push(Date.parse(stamp.timestamp));

  });

  parsed.sort((a,b) => {return a - b});

  const shifted = [];

  const lowest = parsed[0];

  console.log(lowest)

  parsed.forEach(msEpoch => {

    console.log(msEpoch, lowest, msEpoch - lowest)

    shifted.push(msEpoch - lowest);
    
  });

  console.log(shifted);

}
