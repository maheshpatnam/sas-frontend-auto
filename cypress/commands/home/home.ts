
export class HomePage {

  /*========================================================================== *\
    Selectors
  /* ========================================================================== */
  private inptSearch: string = 'input[placeholder="Search..."]';
  private titleSpotify: string = '.text-xl';
  private divSongName: string = 'div[class*="w-full"]';
  private btnPause: string = 'button[data-tooltips="Pause"]';
  private btnPlay: string = 'button[data-tooltips="Play"]';
  private btnEnableRepeat: string = 'button[data-tooltips="Enable repeat"]';
  private btnDisableRepeat: string = 'button[data-tooltips="Disable repeat"]';
  private btnMute: string = 'button[data-tooltips="Mute"]';
  private btnUnmute: string = 'button[data-tooltips="Unmute"]';
  private lnkSpotify: string = 'a[data-tooltips="Open in Spotify"]';
  private btnAcceptCookies: string = '#onetrust-accept-btn-handler';
  private divSearchResults: string = '.text-3xl';
  private divNewResults: string = '.mt-5.mb-3.text-2xl';
  private imgTrackName: string = 'img[class*="absolute"]';
 
  constructor() { }

  /* ========================================================================== *\
      Re-Usable methods
  /* ========================================================================== */


  launchURL(): HomePage {
    cy.visit("/");
    cy.titleShouldIncludeText("SAS SDET");
    cy.elementShouldBeVisible(this.titleSpotify);
    return this;
  }

  searchSong(songName: string): HomePage {
    cy.elementShouldBeVisible(this.inptSearch);
    cy.enterText(this.inptSearch, songName);
    cy.urlShouldIncludeText("search");
    return this;
  }

  selectSong(): HomePage {
    cy.titleShouldIncludeText("SAS SDET");
    cy.clickFirstElement(this.divSongName);
    return this;
  }


  verifySearchResults(): HomePage {
    cy.elementShouldBeVisible(this.divSearchResults);
    cy.titleShouldIncludeText("SAS SDET");
    return this;
  }

  pauseVideo(): HomePage {
    cy.clickElement(this.btnPause);
    return this;
  }

  playVideo(): HomePage {
    cy.clickElement(this.btnPlay);
    return this;
  }

  enableRepeat(): HomePage {
    cy.clickElement(this.btnEnableRepeat);
    return this;
  }

  disableRepeat(): HomePage {
    cy.clickElement(this.btnDisableRepeat);
    return this;
  }

  muteAudio(): HomePage {
    cy.clickElement(this.btnMute);
    return this;
  }

  unmuteAudio(): HomePage {
    cy.clickElement(this.btnUnmute);
    return this;
  }

  openInSpotify(): HomePage {
    cy.elementShouldBeVisible(this.lnkSpotify);
    cy.clickElementByRemovingTarget(this.lnkSpotify);
    cy.clickElement(this.lnkSpotify);
    this.acceptCookies();
    return this;
  }

  acceptCookies(): HomePage {
    cy.clickElement(this.btnAcceptCookies);
    return this;
  }

  noSongsDisplayed(): HomePage {
    cy.elementShouldBeVisible(this.divSearchResults);
    cy.elementShouldNotExist(this.divSongName);
    return this;
  }
  verifynewResultsContentDisplayed(): HomePage {
    cy.elementShouldBeVisible(this.divNewResults);
    return this;
  }

  selectArtist(): HomePage {
    cy.wait(1000);
    cy.elementShouldBeVisible(this.divSearchResults);
    cy.clickFirstElement(this.divSongName);
    cy.urlShouldIncludeText("artist");
    return this;
  }
}
