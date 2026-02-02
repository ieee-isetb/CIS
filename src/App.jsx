/* 
 * Main App component - IEEE CIS ISET Bizerte Website
 * Added: useState hook for managing Games widget visibility
 * Added: GamesCIS component import and rendering
 */
import { useState } from 'react'
import NavbarCIS from './cis/NavbarCIS'
import TitleCIS from './cis/TitleCIS'
import AboutCIS from './cis/AboutCIS'
import StatisticsCIS from './cis/StatisticsCIS'
import TeamCIS from './cis/TeamCIS'
import ContactCIS from './cis/ContactCIS'
import FooterCIS from './cis/FooterCIS'
import EventsCIS from './cis/EventsCIS'
import GamesCIS from './cis/GamesCIS'
import './App.css'

function App() {
  /* New: State to control Games widget visibility */
  const [gamesOpen, setGamesOpen] = useState(false);

  return (
    <>
      {/* Added: onOpenGames prop to allow Navbar to open Games widget */}
      <NavbarCIS onOpenGames={() => setGamesOpen(true)} />
      <TitleCIS />
      <AboutCIS />
      <StatisticsCIS />
      <EventsCIS />
      <TeamCIS />
      <ContactCIS />
      <FooterCIS />
      {/* New: Games widget - renders as overlay when gamesOpen is true */}
      <GamesCIS isOpen={gamesOpen} onClose={() => setGamesOpen(false)} />
    </>
  )
}

export default App
