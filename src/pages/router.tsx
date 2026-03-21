import { BrowserRouter, Route, Routes } from "react-router";
import { Root } from "./Root";
import { MediaPickerPage } from "./picker/MediaPickerPage";
import { NotFoundPage } from "./NotFound";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Root}>
        <Route index={true} element={<MediaPickerPage />} />
        <Route path='anime' element={<MediaPickerPage />} />
        <Route path='manga' element={<MediaPickerPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Fallback to 404 page for any unknown routes */}
      </Route>
    </Routes>
  </BrowserRouter>
)
