/* SystemJS module definition */
// noinspection BadExpressionStatementJS
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'json!*' {
  const value: any;
  export default value;
}
