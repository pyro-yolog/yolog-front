interface Window {
  webkit: Webkit;

  ReactNativeWebView: {
    postMessage(msg: string): void;
  };
}
