import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ErrorPage, DetaisPage } from '../../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetaisPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
