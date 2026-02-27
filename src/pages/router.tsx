import { BrowserRouter, Route, Routes } from "react-router";
import { Root } from "./Root";
import { MediaPickerPage } from "./picker/MediaPickerPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Root}>
        <Route index={true} element={<MediaPickerPage mediaType="anime" />} />
        <Route path='anime' element={<MediaPickerPage mediaType="anime" />} />
        <Route path='manga' element={<MediaPickerPage mediaType="manga" />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
