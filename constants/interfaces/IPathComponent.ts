export default interface IPathComponent {
  path: string;
  component: () => JSX.Element;
}
