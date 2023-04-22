import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Center, Container, Flex, Icon, Spacer } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { useNavigate, NavLink } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';

import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Projects from './pages/Projects';
import Delegation from './pages/Delegation';
import Navbar from './components/Navbar';

function App(): JSX.Element {

  const navigate = useNavigate();

  useHotkeys('ctrl+up', () => {
    navigate('inbox');
  });
  useHotkeys('ctrl+down', () => {
    navigate('calendar');
  });
  useHotkeys('ctrl+left', () => {
    navigate('projects');
  });
  useHotkeys('ctrl+right', () => {
    navigate('delegation');
  });

  return (
    <Box as='main'>
      <Container maxW={1100}>
        <Navbar />
        <Box mt={70}>
          <Center>
            <NavLink to={"inbox"}>
              <Icon as={ArrowUpIcon} />
            </NavLink>
          </Center>
          <Flex>
            <NavLink to={'projects'}>
              <Icon as={ArrowBackIcon} />
            </NavLink>
            <Spacer />
            <Box>
              <Routes>
                <Route path="inbox" element={<Inbox />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="projects" element={<Projects />} />
                <Route path="delegation" element={<Delegation />} />
              </Routes>
            </Box>
            <Spacer />
            <NavLink to={'delegation'}>
              <Icon as={ArrowForwardIcon} />
            </NavLink>
          </Flex>
          <Center>
            <NavLink to={'calendar'}>
              <Icon as={ArrowDownIcon} />
            </NavLink>
          </Center>
        </Box>
      </Container >
    </Box >
  );
}

export default App;
