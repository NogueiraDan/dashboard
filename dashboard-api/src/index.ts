import { app, PORT } from "./server";

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
