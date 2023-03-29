import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const elementRoot = document.getElementById('root');
  if (!elementRoot) {
    return;
  }

  const root = ReactDOM.createRoot(elementRoot);
  root.render(<App />);
}

main();
