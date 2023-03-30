/// <reference types="cypress" />

import { songs } from "../../data/songs.json";
import { artists } from "../../data/artists.json";

import { HomePage } from "../../commands/home/home";

const homePage = new HomePage();

describe('Spotify Songs Test Suite', () => {

  beforeEach(() => {
    homePage
      .launchURL();
  })

  // Postive testcases

  it('User should be able to see new released albums', () => {
    homePage
      .verifynewResultsContentDisplayed();
  })

  it('User should be able to play a song from specific artist', () => {
    homePage
      .searchSong(artists.validArtistName)
      .selectArtist()
      .selectSong()
      .pauseVideo()
      .playVideo();
  })

  it('User should be able to pause and play songs', () => {
    homePage
      .searchSong(songs.validSong)
      .verifySearchResults()
      .selectSong()
      .pauseVideo()
      .playVideo()
  })

  it('User should be able to mute and unmute songs', () => {
    homePage
      .searchSong(songs.validSong)
      .verifySearchResults()
      .selectSong()
      .muteAudio()
      .unmuteAudio()
  })

  it('User should be able to enable and disable repeat mode ', () => {
    homePage
      .searchSong(songs.validSong)
      .verifySearchResults()
      .selectSong()
      .enableRepeat()
      .disableRepeat()
  })

  it('User should be able to open in spotify', () => {
    homePage
      .searchSong(songs.validSong)
      .verifySearchResults()
      .selectSong()
      .openInSpotify()
  })

  // Negative testcases
  it('User should not see songs with invalid song name', () => {
    homePage
      .searchSong(songs.invalidSong)
      .noSongsDisplayed()
  })


})
