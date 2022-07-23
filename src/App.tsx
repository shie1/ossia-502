import { Header, Center, Group, Footer, Text, Image, AppShell, MantineProvider, Container, Title } from '@mantine/core';

const AppHeader = () => {
  return (<Header style={{ zIndex: '99 !important' }} height={70} p="md">
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Center>
        <Group onClick={() => {
          window.dispatchEvent(new Event("ossia-title-click"))
        }} onMouseDown={(e: any) => { e.preventDefault() }} className='click'><Image alt='Ossia' src="/title.png" height={40} /></Group>
      </Center>
    </div>
  </Header>)
}

const AppFooter = () => {
  return (<Footer height={60} p="md">
    <Center>
      <Group>
        <Text align='center'>Ossia Music Player</Text>
      </Group>
    </Center>
  </Footer>)
}

function App() {
  return (<div onContextMenu={(e) => { e.preventDefault() }}>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      focusRing: 'auto',
      defaultRadius: 'lg',
      white: "#F5F3F4",
      black: "#0B090A",
      colors: {
        "purple_plum": ['#9E5DB9', '#9650B4', '#8C48A9', '#81439C', '#773D8F', '#6C3882', '#613275', '#562D68', '#4B275B', '#41214E'],
      },
      primaryColor: "purple_plum",
      primaryShade: 2,
      fontFamily: "Sora",
      fontFamilyMonospace: "Inconsolata",
      dir: 'ltr',
      loader: 'bars',
      dateFormat: "YYYY/MM/DD",
      colorScheme: "dark",
    }}>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        footer={<AppFooter />}
        header={<AppHeader />}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Container sx={{ height: '70vh' }}>
          <Group spacing={0} position="center" align="center" sx={{ height: '100%' }} direction="row">
            <Center mx={10}>
              <Image imageProps={{ draggable: false }} alt="Sad robot on tower" sx={{ width: '28vh' }} src="/sad_robot.svg" />
            </Center>
            <Group align="center" mx={20} direction="column" spacing={4}>
              <Title align="center" sx={{ fontSize: '3rem' }}>502</Title>
              <Text align="center" size="xl">The page is currently offline, we're probably updating something.</Text>
            </Group>
          </Group>
        </Container>
      </AppShell>
    </MantineProvider>
  </div>);
}

export default App;
