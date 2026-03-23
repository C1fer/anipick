import { BrowserRouter, Route, Routes } from "react-router";
import { Root } from "./Root";
import { MediaPickerPage } from "./picker/MediaPickerPage";
import { NotFoundPage } from "./NotFound";

const pickerRoutes = ["watch", "read", "anime", "manga"];

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Root}>
        <Route index element={<MediaPickerPage />} />
        {pickerRoutes.map((path) => (
          <Route key={path} path={path} element={<MediaPickerPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} /> {/* Fallback to 404 page for any unknown routes */}
      </Route>
    </Routes>
  </BrowserRouter>
)
