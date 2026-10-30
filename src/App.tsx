import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-slate-800">MUI Practice</h1>
      <Button variant="contained" color="primary">
        MUIのボタン
      </Button>
    </div>
  );
}