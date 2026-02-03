/* 
 * Main App component - IEEE CIS ISET Bizerte Website
 * Added: useState hook for managing Games widget visibility
 * Added: GamesCIS component import and rendering
 * Added: LoaderCIS component for preloading images
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
import LoaderCIS from './cis/LoaderCIS'
import './App.css'

function App() {
  /* New: State to control Games widget visibility */
  const [gamesOpen, setGamesOpen] = useState(false);
  /* New: State to track if loading is complete */
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader - shows until all images are loaded */}
      {isLoading && <LoaderCIS onLoadComplete={() => setIsLoading(false)} />}
      
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
