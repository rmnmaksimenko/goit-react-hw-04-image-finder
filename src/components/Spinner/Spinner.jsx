import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};
export default function Spinner() {
  return (
    <FadeLoader
      color="#36d7b7"
      cssOverride={override}
      size={240}
      aria-label="Loading Spinner"
      speedMultiplier={1}
    />
  );
}
