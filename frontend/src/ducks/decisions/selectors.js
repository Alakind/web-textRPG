const selectLocation = ({ decisions: { location } }) => location;

const selectOptions = ({ decisions: { options } }) => options;

export const decisionsSelectors = {
  selectLocation,
  selectOptions,
};
