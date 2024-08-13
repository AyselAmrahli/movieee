import { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './const/constant';

import Header from './components/Header';
import Container from './components/shared/Container';

import './App.scss';
import Loading from './components/Loading';
import Dialog from './components/Dialog';
import Button from './components/shared/Button';

import { getRequestToken } from './redux/actions';
import { SearchProvider } from './context/SearchProvider';

function App() {
  let dispatch = useDispatch();
  const [hasSessionToken, setHasSessionToken] = useState<boolean>(false);
  const accountID = localStorage.getItem('account_id');
  const hasUserAccess = hasSessionToken || accountID;

  const handleGetRequest = () => {
    dispatch(getRequestToken());
    setHasSessionToken(true);
  };

  const routeList = routes.map(({ path, Component }, index) => {
    return <Route key={index} {...{ path }} element={<Component />} />;
  });

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          {!hasUserAccess ? (
            <Dialog>
              <Button onClick={() => handleGetRequest()}>Click to Get Session</Button>
            </Dialog>
          ) : (
            <>
              <SearchProvider>
                <Header />
                <Container>
                  <Routes>{routeList}</Routes>
                </Container>
              </SearchProvider>
              ,
            </>
          )}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
