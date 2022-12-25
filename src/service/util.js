
export const format = (time) => {

  const seconds = time / 1000;

  if (seconds < 100) {
    return Math.floor(seconds) + " seconds";
  }

  const mins = seconds / 60;

  if (mins < 60) {
    return mins.toFixed(1) + " minutes"
  }

  const hours = mins / 60;

  return Math.floor(hours) + " hours"
}
