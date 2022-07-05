export default function App(props) {
  return (
    <main>
      <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      {props.children}
    </main>
  );
}
