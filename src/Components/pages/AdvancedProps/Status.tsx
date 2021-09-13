type StatusProps = {
  status: 'loading' | 'succes' | 'error';
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if ((props.status = 'succes')) {
    message = 'Data fetched successfully!';
  } else if ((props.status === 'error!')) {
    message = 'Error fetching data';
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}
