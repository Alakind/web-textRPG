const selectLocation = ({ decisions: { location } }) => location;

const selectOptions = ({ decisions: { options } }) => options;

const selectOutput = ({ decisions: { output } }) => output;

export const decisionsSelectors = {
  selectLocation,
  selectOptions,
  selectOutput,
};
